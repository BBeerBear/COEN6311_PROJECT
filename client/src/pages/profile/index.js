import './style.css';
import axios from 'axios';
import { useEffect, useReducer, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { profileReducer } from '../../functions/reducers';
import Header from '../../components/header';
import Cover from './Cover';
import ProfilePictureInfos from './ProfilePictureInfos';
import ProfileMenu from './ProfileMenu';
import Intro from '../../components/intro';
import PplYouMayKnow from './PplYouMayKnow';
export default function Profile() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));
  var userID = userId === undefined ? user?._id : userId;
  const [{ loading, error, profile }, dispatch] = useReducer(profileReducer, {
    loading: false,
    profile: {},
    error: '',
  });
  useEffect(() => {
    if (userID) getProfile();
  }, [userID]);

  var visitor = userID === user?._id ? false : true;

  const getProfile = async () => {
    try {
      dispatch({
        type: 'PROFILE_REQUEST',
      });
      const { data } = await axios.get(`/api/getProfile/${userID}`);
      if (data.ok === false) {
        navigate(`/profile`);
      } else {
        dispatch({
          type: 'PROFILE_SUCCESS',
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: 'PROFILE_ERROR',
        payload: error.response.data.message,
      });
    }
  };

  const profileTop = useRef(null);
  const leftSide = useRef(null);
  const [height, setHeight] = useState();
  const [leftHeight, setLeftHeight] = useState();
  const [scrollHeight, setScrollHeight] = useState();
  useEffect(() => {
    setHeight(profileTop.current.clientHeight + 300);
    setLeftHeight(leftSide.current.clientHeight);
    window.addEventListener('scroll', getScroll, { passive: true });
    return () => {
      window.addEventListener('scroll', getScroll, { passive: true });
    };
  }, [loading, scrollHeight]);
  const check = useMediaQuery({
    query: '(min-width:901px)',
  });
  const getScroll = () => {
    setScrollHeight(window.pageYOffset);
  };

  return (
    <div className='profile'>
      <Header page='profile' />
      <div className='profile_top' ref={profileTop}>
        <div className='profile_container'>
          <Cover cover={profile.cover} />
          <ProfilePictureInfos
            profile={profile}
            // visitor={visitor}
          />
          <ProfileMenu />
        </div>
      </div>
      <div className='profile_bottom'>
        <div className='profile_container'>
          <div className='bottom_container'>
            <PplYouMayKnow />
            <div
              className={`profile_grid ${
                check && scrollHeight >= height && leftHeight > 1000
                  ? 'scrollFixed showLess'
                  : check &&
                    scrollHeight >= height &&
                    leftHeight < 1000 &&
                    'scrollFixed showMore'
              }`}
            >
              <div className='profile_left' ref={leftSide}>
                <Intro profile={profile} visitor={visitor} />
                {/* <Photos
                  username={userName}
                  token={user.token}
                  photos={photos}
                />
                <Friends friends={profile.friends} /> */}
                <div className='relative_fb_copyright'>
                  <Link to='/'>Privacy </Link>
                  <span>. </span>
                  <Link to='/'>Terms </Link>
                  <span>. </span>
                  <Link to='/'>Advertising </Link>
                  <span>. </span>
                  <Link to='/'>
                    Ad Choices <i className='ad_choices_icon'></i>{' '}
                  </Link>
                  <span>. </span>
                  <Link to='/'></Link>Cookies <span>. </span>
                  <Link to='/'>More </Link>
                  <span>. </span> <br />
                  Meta © 2022
                </div>
              </div>
              <div className='profile_right'>
                {/* <div className="posts">
                  {profile.posts && profile.posts.length ? (
                    profile.posts.map((post) => (
                      <Post post={post} user={user} key={post._id} profile />
                    ))
                  ) : (
                    <div className="no_posts">No posts available</div>
                  )}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
