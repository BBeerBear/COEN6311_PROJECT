import { Dots, NewRoom, Search } from '../../../svg';
import Contact from './Contact';
import './style.css';
import { friendspage } from '../../../functions/reducers';
import { getFriendsPageInfos } from '../../../functions/user';
import { useEffect, useReducer } from 'react';
export default function RightHome({ user }) {
  const color = '#65676b';
  const [{ loading, error, data }, dispatch] = useReducer(friendspage, {
    loading: false,
    data: {},
    error: '',
  });
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    dispatch({ type: 'FRIENDS_REQUEST' });
    const data = await getFriendsPageInfos();

    if (data.status === 'ok') {
      dispatch({ type: 'FRIENDS_SUCCESS', payload: data.data });
    } else {
      dispatch({ type: 'FRIENDS_ERROR', payload: data.data });
    }
  };
  return (
    <div className='right_home'>
      <div className='contacts_wrap'>
        <div className='contacts_header'>
          <div className='contacts_header_left'>Contacts</div>
          <div className='contacts_header_right'>
            <div className='contact_circle hover1'>
              <NewRoom color={color} />
            </div>
            <div className='contact_circle hover1'>
              <Search color={color} />
            </div>
            <div className='contact_circle hover1'>
              <Dots color={color} />
            </div>
          </div>
        </div>
        <div className='contacts_list'>
          {data.friends &&
            data.friends.map((friend, i) => <Contact user={friend} key={i} />)}
        </div>
      </div>
    </div>
  );
}
