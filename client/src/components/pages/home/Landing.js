import React from 'react';
import './Landing.css';
// import { Button } from './Button'


const Landing = () => {
  return (
    // <div style={{ textAlign: 'center' }}>
    //   <h1>Welcome to Trending News Social Application hahah</h1>
    // </div>

    <div className='landing-container'>
    {/* <img src='news.jpg' alt='news'></img> */}
    <img src="../../news.jpg" alt="news" width="500" height="600"/>
    <h1>Trending News, your best news application!</h1>
    <p>Join us now!</p>
    <div className='signup-btns'>

    <a href='/auth/google'>
        <button className='landing-btn'>Login with Google</button>
        </a>

        <a href='/auth/facebook'>
        <button className='landing-btn'>Login with Facebook</button>
        </a>
     </div>
    </div>
      );
};

export default Landing;
