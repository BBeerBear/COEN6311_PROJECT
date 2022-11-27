export default function LoginForm() {
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
          <a href='/auth/facebook'>Login with Facebook</a>
          <a herf='/auth/google'>Login with Google</a>
        </div>
      </div>
    </div>
  );
}
