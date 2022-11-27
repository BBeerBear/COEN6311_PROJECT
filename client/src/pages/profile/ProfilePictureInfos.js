import Friendship from './Friendship';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function ProfilePictureInfos({ profile, visitor }) {
  const [show, setShow] = useState(false);
  return (
    <div className='profile_img_wrap'>
      <div className='profile_w_left'>
        <div className='profile_w_img'>
          <div
            className='profile_w_bg'
            style={{
              backgroundSize: 'cover',
              backgroundImage: `url(${profile.picture})`,
            }}
          ></div>
          {!visitor && (
            <div
              className='profile_circle hover1'
              onClick={() => setShow(true)}
            >
              <i className='camera_filled_icon'></i>
            </div>
          )}
        </div>
        <div className='profile_w_col'>
          <div className='profile_name'>{profile.name}</div>
          <div className='profile_friend_count'>
            {profile?.friends && (
              <div className='profile_card_count'>
                {profile?.friends.length === 0
                  ? ''
                  : profile?.friends.length === 1
                  ? '1 Friend'
                  : `${profile?.friends.length} Friends`}
              </div>
            )}
          </div>
          <div className='profile_friend_imgs'>
            {profile?.friends &&
              profile.friends.slice(0, 6).map((friend, i) => (
                <Link to={`/profile/${friend._id}`} key={i}>
                  <img
                    src={friend.picture}
                    alt=''
                    style={{
                      transform: `translateX(${-i * 7}px)`,
                      zIndex: `${i}`,
                    }}
                  />
                </Link>
              ))}
          </div>
        </div>
      </div>
      {visitor ? (
        <Friendship friendshipp={profile?.friendship} profileid={profile._id} />
      ) : (
        <div className='profile_w_right'>
          <div className='blue_btn'>
            <img src='../../../icons/plus.png' alt='' className='invert' />
            <span>Add to story</span>
          </div>
          <div className='gray_btn'>
            <i className='edit_icon'></i>
            <span>Edit profile</span>
          </div>
        </div>
      )}
    </div>
  );
}
