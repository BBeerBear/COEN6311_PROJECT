import './style.css';
import logo from '../../img/logo.jpg';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  Friends,
  FriendsActive,
  Gaming,
  Home,
  HomeActive,
  Market,
  Messenger,
  Notifications,
  Search,
  Watch,
} from '../../svg';
import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import useClickOutside from '../../helpers/clickOutside';
import UserMenu from './userMenu';
export default function Header({ page, getAllPosts }) {
  const { user } = useSelector((user) => ({ ...user }));
  const color = '#65676b';
  const [showUserMenu, setShowUserMenu] = useState(false);
  const usermenu = useRef(null);

  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };
  const onFormSubmit = async () => {
    const { data } = await axios.post('/api/news/get', { q: term });
    dispatch({ type: 'FETCH_NEWS', payload: data });
  };

  useClickOutside(usermenu, () => {
    setShowUserMenu(false);
  });

  return (
    <header>
      <div className='header_left'>
        <Link to='/' className='header_logo'>
          <div className='circle'>
            {/* <Logo /> */}
            <img
              src={logo}
              alt='logo'
              className='circle'
              style={{ width: '50px', style: 'inline', margin: '10px' }}
            />
          </div>
        </Link>
        <form
          onSubmit={() => {
            onFormSubmit();
          }}
        >
          <div className='search search1'>
            <Search color={color} />
            <input
              type='text'
              required
              placeholder='Search News'
              className='hide_input'
              value={term}
              onChange={onInputChange}
            />
          </div>
        </form>
      </div>

      <div className='header_middle'>
        <Link
          to='/'
          className={`middle_icon ${page === 'home' ? 'active' : 'hover1'}`}
          onClick={() => getAllPosts()}
        >
          {page === 'home' ? <HomeActive /> : <Home color={color} />}
        </Link>
        <Link
          to='/friends'
          className={`middle_icon ${page === 'friends' ? 'active' : 'hover1'}`}
        >
          {page === 'friends' ? <FriendsActive /> : <Friends color={color} />}
        </Link>
        <Link to='/' className='middle_icon hover1'>
          <Watch color={color} />
          <div className='middle_notification'>9+</div>
        </Link>
        <Link to='/' className='middle_icon hover1'>
          <Market color={color} />
        </Link>
        <Link to='/' className='middle_icon hover1 '>
          <Gaming color={color} />
        </Link>
      </div>
      <div className='header_right'>
        <Link
          to='/profile'
          className={`profile_link hover1 ${
            page === 'profile' ? 'active_link' : ''
          }`}
        >
          <img src={user?.picture} alt='' />
          <span>{user?.name}</span>
        </Link>

        <div className='circle_icon hover1'>
          <Messenger />
        </div>
        <div className='circle_icon hover1'>
          <Notifications />
          <div className='right_notification'>5</div>
        </div>
        <div
          className={`circle_icon hover1 ${showUserMenu && 'active_header'}`}
          ref={usermenu}
        >
          <div
            onClick={() => {
              setShowUserMenu((prev) => !prev);
            }}
          >
            <div style={{ transform: 'translateY(2px)' }}>
              <ArrowDown />
            </div>
          </div>

          {showUserMenu && <UserMenu user={user} />}
        </div>
      </div>
    </header>
  );
}
