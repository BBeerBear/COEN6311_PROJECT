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
import PplYouMayKnow from './PplYouMayKnow';

export default function Profile() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));
  if (user) var userID = userId === undefined ? user._id : userId;
  const [{ loading, error, profile }, dispatch] = useReducer(profileReducer, {
    loading: false,
    profile: {},
    error: '',
  });
  useEffect(() => {
    getProfile();
  }, [userID]);

  const getProfile = async () => {
    try {
      dispatch({
        type: 'PROFILE_REQUEST',
      });
      const { data } = await axios.get(`/api/getProfile/${userID}`);
      if (data.ok === false) {
        navigate('/profile');
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
      <div className='profile_container'>
        <Cover cover={profile.cover} />
        <ProfilePictureInfos profile={profile} />
        <ProfileMenu />
      </div>
      <div className='profile_bottom'>
        <div className='profile_container'>
          <div className='bottom_container'>
            <PplYouMayKnow />
          </div>
        </div>
      </div>
    </div>
  );
}
