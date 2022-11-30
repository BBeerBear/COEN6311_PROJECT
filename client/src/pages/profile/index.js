import './style.css';
import axios from 'axios';
import { useEffect, useReducer, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { profileReducer } from '../../functions/reducers';
import Header from '../../components/header';
import Cover from './Cover';
import ProfilePictureInfos from './ProfilePictureInfos';
import ProfileMenu from './ProfileMenu';
import Intro from '../../components/intro';
import PplYouMayKnow from './PplYouMayKnow';
import Friends from './Friends';
import NewsItem from '../../components/news/NewsItem';
import GridPosts from './GridPosts';
import Activities from './Activities';
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
          <Cover cover={profile.picture} />
          <ProfilePictureInfos profile={profile} visitor={visitor} />
          <ProfileMenu profile={profile} />
        </div>
      </div>
      <div className='profile_bottom'>
        <div className='profile_container'>
          <div className='bottom_container'>
            {/* <PplYouMayKnow /> */}
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
                <Friends friends={profile.friends} />
                <Activities
                  activities={profile.activities}
                  onlineTime={profile.onlineTime}
                />
              </div>
              <div className='profile_right'>
                <GridPosts />
                <div className='posts'>
                  {profile.savedNews && profile.savedNews.length ? (
                    profile.savedNews.map((news) => (
                      <NewsItem
                        key={news._id}
                        news={news.news}
                        user={user}
                        page='profile'
                        visitor={visitor}
                      />
                    ))
                  ) : (
                    <div className='no_posts'>No saved news</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
