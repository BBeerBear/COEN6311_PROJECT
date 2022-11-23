import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../img/logo.jpg';
import {
  ArrowDown,
  Friends,
  Gaming,
  Home,
  HomeActive,
  Logo,
  Market,
  Menu,
  Messenger,
  Notifications,
  Search,
  Watch,
} from '../../svg';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

export default function Header({ page }) {
  const { user } = useSelector((user) => ({ ...user }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const color = '#65676b';

  const onClickLogout = async () => {
    await axios.get('/api/logout');
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };
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
      </div>
      <div className='header_middle'>
        <Link
          to='/'
          className={`middle_icon ${page === 'home' ? 'active' : 'hover1'}`}
        >
          {page === 'home' ? <HomeActive /> : <Home color={color} />}
        </Link>
        <Link to='/' className='middle_icon hover1'>
          <Friends color={color} />
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
          <span>{user?.first_name}</span>
        </Link>
        {/* <div
          className={`circle_icon hover1 ${showAllMenu && 'active_header'}`}
          ref={allmenu}
        >
          <div
            onClick={() => {
              setShowAllMenu((prev) => !prev);
            }}
          >
            <div style={{ transform: 'translateY(2px)' }}>
              <Menu />
            </div>
          </div>

          {showAllMenu && <AllMenu />}
        </div> */}
        <div className='circle_icon hover1'>
          <Messenger />
        </div>
        <div className='circle_icon hover1'>
          <Notifications />
          <div className='right_notification'>5</div>
        </div>
        {/* <div
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
        </div> */}
      </div>
    </header>
    // <header>
    //   <div className='header_left'>
    //     <img
    //       src={logo}
    //       alt='logo'
    //       className='circle'
    //       style={{ width: '50px', style: 'inline', margin: '10px' }}
    //     />
    //     <Link to={'/'} className='brand-logo'>
    //       BBeerBear News
    //     </Link>
    //   </div>
    //   <div className='header_middle'>
    //     {!user
    //       ? [
    //           <Link to='/news'>
    //             <a>News</a>
    //           </Link>,
    //           <Link to='/profile'>
    //             <a>Profile</a>
    //           </Link>,
    //         ]
    //       : [
    //           <Link to='/news'>
    //             <a>News</a>
    //           </Link>,
    //           <Link to='/profile'>
    //             <a>Profile</a>
    //           </Link>,
    //           <a onClick={onClickLogout}>Logout</a>,
    //         ]}
    //   </div>
    //   <ul className='header_right'>
    //     {!user
    //       ? [
    //           <Link to='/auth/google'>Login with Google</Link>,
    //           <Link to='/auth/facebook'>Login with Facebook</Link>,
    //         ]
    //       : [
    //           <li key='3'>
    //             <Link to='/news'>
    //               <a>News</a>
    //             </Link>
    //           </li>,
    //           <li key='1'>
    //             <Link to='/profile'>
    //               <a>Profile</a>
    //             </Link>
    //           </li>,
    //           <li key='2'>
    //             <a onClick={onClickLogout}>Logout</a>
    //           </li>,
    //         ]}
    //   </ul>
    // </header>
  );
}
