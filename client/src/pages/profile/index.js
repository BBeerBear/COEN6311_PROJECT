import './style.css';
import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { profileReducer } from '../../functions/reducers';
import Header from '../../components/header';
import Cover from './Cover';
import ProfilePictureInfos from './ProfilePictureInfos';
import ProfileMenu from './ProfileMenu';
import Intro from '../../components/intro';
import Friends from './Friends';
import NewsItem from '../../components/news/NewsItem';
import GridPosts from './GridPosts';
import Activities from './Activities';
export default function Profile() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));
  var userID = userId === undefined ? user._id : userId;
  const [{ loading, error, profile }, dispatch] = useReducer(profileReducer, {
    loading: true,
    profile: {},
    error: '',
  });
  useEffect(() => {
    if (userID) getProfile();
  }, [userID, profile.friendship]);

  var visitor = userID === user._id ? false : true;
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
  return (
    <div className='profile'>
      <Header page='profile' />
      <div className='profile_top'>
        <div className='profile_container'>
          <Cover cover={profile.picture} />
          <ProfilePictureInfos profile={profile} visitor={visitor} />
          {/* <ProfileMenu profile={profile} /> */}
        </div>
      </div>
      <div className='profile_bottom'>
        <div className='profile_container'>
          <div className='bottom_container'>
            {profile.friendship && profile.friendship.block ? (
              <b>You are being blocked!!!</b>
            ) : profile.country !== user.country &&
              profile.friendship &&
              !profile.friendship.friends ? (
              <b>
                !!!You are not in the same location, please be a friend first
                then your can discover each other
              </b>
            ) : (
              <div className={`profile_grid `}>
                <div className='profile_left'>
                  <Intro profile={profile} visitor={visitor} />
                  <Friends friends={profile.friends} />
                  <Activities
                    activities={profile.activities}
                    onlineTime={profile.onlineTime}
                    visitor={visitor}
                    friendship={profile.friendship}
                  />
                </div>
                <div className='profile_right'>
                  <GridPosts />
                  {!visitor ||
                  (profile?.friendship && profile.friendship.friends) ? (
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
                  ) : (
                    <>
                      <b>!!!Only friends can see watch list</b>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
