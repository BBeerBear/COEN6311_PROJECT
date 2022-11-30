export default function LoginForm() {
  const loginWithFB = () => {
    window.location.href = '/auth/facebook';
    localStorage.setItem('loginTime', new Date());
  };
  const loginWithGG = () => {
    window.location.href = '/auth/google';
    localStorage.setItem('loginTime', new Date());
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
