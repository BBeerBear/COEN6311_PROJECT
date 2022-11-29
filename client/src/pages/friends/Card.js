import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  acceptRequest,
  cancelRequest,
  deleteRequest,
  addFriend,
} from '../../functions/user';

export default function Card({ userr, type, getData }) {
  const { user } = useSelector((state) => ({ ...state }));
  const cancelRequestHandler = async (userId) => {
    const res = await cancelRequest(userId);
    if (res == 'ok') {
      //refresh
      getData();
    }
  };
  const confirmHandler = async (userId) => {
    const res = await acceptRequest(userId);
    if (res == 'ok') {
      getData();
    }
  };
  const deleteHandler = async (userId) => {
    const res = await deleteRequest(userId);
    if (res == 'ok') {
      getData();
    }
  };
  const addFriendHandler = async (userId) => {
    const res = await addFriend(userId);
    if (res == 'ok') {
      getData();
    }
  };
  return (
    <div className='req_card'>
      <Link to={`/profile/${userr._id}`}>
        <img src={userr.picture} alt='' />
      </Link>
      <div className='req_name'>{userr.name}</div>
      {type === 'sent' ? (
        <button
          className='blue_btn'
          onClick={() => cancelRequestHandler(userr._id)}
        >
          Cancel Request
        </button>
      ) : type === 'request' ? (
        <>
          <button
            className='blue_btn'
            onClick={() => confirmHandler(userr._id)}
          >
            Confirm
          </button>
          <button className='gray_btn' onClick={() => deleteHandler(userr._id)}>
            Delete
          </button>
        </>
      ) : type === 'find' ? (
        <>
          {/* <button
            className='blue_btn'
            onClick={() => confirmHandler(userr._id)}
          >
            AddFriend
          </button> */}
          {/* <button className='gray_btn' onClick={() => deleteHandler(userr._id)}>
            Delete
          </button> */}
        </>
      ) : (
        ''
      )}
    </div>
  );
}
