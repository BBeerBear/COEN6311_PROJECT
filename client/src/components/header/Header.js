import { Link, useNavigate } from 'react-router-dom';
import logo from '../../img/logo.jpg';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

export default function Header() {
  const { user } = useSelector((user) => ({ ...user }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickLogout = async () => {
    await axios.get('/api/logout');
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };
  return (
    <nav>
      <div className='nav-wrapper'>
        <img
          src={logo}
          alt='logo'
          className='circle'
          style={{ width: '50px', style: 'inline', margin: '10px' }}
        />
        <Link to={user ? '/dashboard' : '/'} className='brand-logo'>
          BBeerBear News
        </Link>
        <ul className='right'>
          {!user
            ? [
                <li key='1'>
                  <a href='/auth/google'>Login with Google</a>
                </li>,
                <li key='2'>
                  <a href='/auth/facebook'>Login with Facebook</a>
                </li>,
              ]
            : [
                <li key='3'>
                  <Link to='/news'>
                    <a>News</a>
                  </Link>
                </li>,
                <li key='1'>
                  <Link to='/profile'>
                    <a>Profile</a>
                  </Link>
                </li>,
                <li key='2'>
                  <a onClick={onClickLogout}>Logout</a>
                </li>,
              ]}
        </ul>
      </div>
    </nav>
  );
}
