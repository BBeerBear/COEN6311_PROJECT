import axios from 'axios';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginWithFB = async () => {
    window.location.href = '/auth/facebook';
    // window.open('/auth/facebook');
    const { data } = await axios.get('/api/current_user');
    Cookies.set('user', JSON.stringify(data));
    // dispatch({ type: 'LOGIN', payload: data });
    //set login time
    if (data) localStorage.setItem('loginTime', new Date());
    navigate('/');
  };
  const loginWithGG = async () => {
    window.location.href = '/auth/google';
    // window.open('/auth/facebook');
    const { data } = await axios.get('/api/current_user');
    Cookies.set('user', JSON.stringify(data));
    // dispatch({ type: 'LOGIN', payload: data });
    //set login time
    if (data) localStorage.setItem('loginTime', new Date());
    navigate('/');
  };
  return (
    <div className='login_wrap'>
      <div className='login_1'>
        {/* <img src='../../..img/logo.jpg' alt='' /> */}
        <span>
          BBeerBear News helps you get trending news and connect people in your
          life.
        </span>
      </div>
      <div className='login_2'>
        <div className='login_2_wrap'>
          <button onClick={loginWithFB}>Login with Facebook</button>
          <button onClick={loginWithGG}>Login with Google</button>
        </div>
      </div>
    </div>
  );
}
