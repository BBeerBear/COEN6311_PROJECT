import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useClickOutside from '../../helpers/clickOutside';
import {
  acceptRequest,
  addFriend,
  cancelRequest,
  deleteRequest,
  follow,
  unfollow,
  unfriend,
  block,
  unblock,
} from '../../functions/user';
import axios from 'axios';
export default function Friendship({ friendshipp, profileid, userid }) {
  const navigate = useNavigate();
  const [friendship, setFriendship] = useState(friendshipp);
  useEffect(() => {
    setFriendship(friendshipp);
  }, [friendshipp]);
  const [friendsMenu, setFriendsMenu] = useState(false);
  const [respondMenu, setRespondMenu] = useState(false);
  const menu = useRef(null);
  const menu1 = useRef(null);
  useClickOutside(menu, () => setFriendsMenu(false));
  useClickOutside(menu1, () => setRespondMenu(false));
  const addFriendHandler = async () => {
    setFriendship({ ...friendship, requestSent: true });
    await addFriend(profileid);
  };
  const cancelRequestHandler = async () => {
    setFriendship({ ...friendship, requestSent: false });
    await cancelRequest(profileid);
  };
  const followHandler = async () => {
    setFriendship({ ...friendship, following: true });
    await follow(profileid);
  };
  const unfollowHandler = async () => {
    setFriendship({ ...friendship, following: false });
    await unfollow(profileid);
  };

  const acceptRequestHanlder = async () => {
    setFriendship({
      ...friendship,
      friends: true,
      requestSent: false,
      requestReceived: false,
    });
    await acceptRequest(profileid);
  };
  const unfriendHandler = async () => {
    setFriendship({
      ...friendship,
      friends: false,
      requestSent: false,
      requestReceived: false,
    });
    await unfriend(profileid);
  };
  const deleteRequestHanlder = async () => {
    setFriendship({
      ...friendship,
      friends: false,
      requestSent: false,
      requestReceived: false,
    });
    await deleteRequest(profileid);
  };
  const blockHandler = async () => {
    setFriendship({
      ...friendship,
      block: true,
      friends: false,
      following: false,
      requestSent: false,
      requestReceived: false,
    });
    await block(profileid);
  };
  const unBlockHandler = async () => {
    setFriendship({
      ...friendship,
      block: false,
    });
    await unblock(profileid);
  };
  const messageHandler = async () => {
    try {
      await axios.post('/api/conversations', {
        senderId: userid,
        receiverId: profileid,
      });
    } catch (error) {
      console.log(error.response.data.message);
    }
    navigate('/messenger');
  };
  return (
    <div className='friendship'>
      {!friendship?.block &&
        (friendship?.friends ? (
          <div className='friends_menu_wrap'>
            <button className='gray_btn' onClick={() => setFriendsMenu(true)}>
              <img src='../../../icons/friends.png' alt='' />
              <span>Friends</span>
            </button>
            {friendsMenu && (
              <div className='open_cover_menu' ref={menu}>
                {friendship?.following ? (
                  <div
                    className='open_cover_menu_item hover1'
                    onClick={() => unfollowHandler()}
                  >
                    <img src='../../../icons/unfollowOutlined.png' alt='' />
                    Unfollow
                  </div>
                ) : (
                  <div
                    className='open_cover_menu_item hover1'
                    onClick={() => followHandler()}
                  >
                    <img src='../../../icons/unfollowOutlined.png' alt='' />
                    Follow
                  </div>
                )}
                <div
                  className='open_cover_menu_item hover1'
                  onClick={() => unfriendHandler()}
                >
                  <i className='unfriend_outlined_icon'></i>
                  Unfriend
                </div>
              </div>
            )}
          </div>
        ) : (
          !friendship?.requestSent &&
          !friendship?.requestReceived && (
            <button className='blue_btn' onClick={() => addFriendHandler()}>
              <img
                src='../../../icons/addFriend.png'
                alt=''
                className='invert'
              />
              <span>Add Friend</span>
            </button>
          )
        ))}
      {friendship?.requestSent ? (
        <button className='blue_btn' onClick={() => cancelRequestHandler()}>
          <img
            src='../../../icons/cancelRequest.png'
            className='invert'
            alt=''
          />
          <span>Cancel Request</span>
        </button>
      ) : (
        friendship?.requestReceived && (
          <div className='friends_menu_wrap'>
            <button className='gray_btn' onClick={() => setRespondMenu(true)}>
              <img src='../../../icons/friends.png' alt='' />
              <span>Respond</span>
            </button>
            {respondMenu && (
              <div className='open_cover_menu' ref={menu1}>
                <div
                  className='open_cover_menu_item hover1'
                  onClick={() => acceptRequestHanlder()}
                >
                  Confirm
                </div>
                <div
                  className='open_cover_menu_item hover1'
                  onClick={() => deleteRequestHanlder()}
                >
                  Delete
                </div>
              </div>
            )}
          </div>
        )
      )}
      <div className='flex'>
        {!friendship?.block &&
          (friendship?.following ? (
            <button className='gray_btn' onClick={() => unfollowHandler()}>
              <img src='../../../icons/follow.png' alt='' />
              <span>Following</span>
            </button>
          ) : (
            <button className='blue_btn' onClick={() => followHandler()}>
              <img src='../../../icons/follow.png' className='invert' alt='' />
              <span>Follow</span>
            </button>
          ))}

        {!friendship?.block ? (
          <button className='gray_btn' onClick={() => blockHandler()}>
            <img src='../../../icons/follow.png' alt='' />
            <span>Block</span>
          </button>
        ) : (
          <button className='blue_btn' onClick={() => unBlockHandler()}>
            <img src='../../../icons/follow.png' className='invert' alt='' />
            <span>Unblock</span>
          </button>
        )}
        {!friendship?.block && (
          <button className='blue_btn' onClick={() => messageHandler()}>
            <img
              src='../../../icons/message.png'
              className={!friendship?.block && 'invert'}
              alt=''
            />
            <span>Message</span>
          </button>
        )}
      </div>
    </div>
  );
}
