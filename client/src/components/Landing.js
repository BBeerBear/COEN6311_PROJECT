import React from 'react';
import { Button } from './Button';
import news from '../assets/news.jpg'
import { Link } from "react-router-dom";
import './landing.css';
import './button.css';
// import { Button } from './Button';
// const Landing = () => {
//   return (
//       <div style={{ textAlign: 'center' }}>
//           <h1>Welcome to Trending News Social Application</h1>
//         <div className='landing-container'>
//             <img src='../assets/news.jpg'></img>
//             <h1>Trending News, your best news application!</h1>
//             <p>Join us now!</p>
//             <div className='signup-btns'>

//             <Button className='btns' buttonStyle='btn--outline'
//             buttonSize='btn--large'>
//               Login with Google
//             </Button>

//             <Button className='btns' buttonStyle='btn--primary'
//             buttonSize='btn--large'>
//               Login with Facebook
//             </Button>
//           </div>
//         </div>
//       </div>
//   );
// };

function Landing() {
  return(
    <div className='landing'>
      <div className='landing-container'>
      <img src={news}></img>
        <h1>
        Trending News, your best news application!
        </h1>
        <p>
        Join us now!
        </p>           
         <a href='/auth/google'>
        <button className='landing-btn'>Login with Google</button>
        </a>
        
        <a href='/auth/facebook'>
        <button className='landing-btn'>Login with Facebook</button>
        </a>

        {/* <a class="waves-effect waves-light btn">Login with Google</a>

        <a class="waves-effect waves-light btn">Login with Facebook</a> */}
      </div>
    </div>
      //     <div style={{ textAlign: 'center' }}>
      //     <h1>Welcome to Trending News Social Application</h1>
      //   <div className='landing-container'>
      //       <img src='../assets/news.jpg'></img>
      //       <h1>Trending News, your best news application!</h1>
      //       <p>Join us now!</p>
      //       <div className='signup-btns'>

      //       <Button className='btns' buttonStyle='btn--outline'
      //       buttonSize='btn--large'>
      //         Login with Google
      //       </Button>

      //       <Button className='btns' buttonStyle='btn--primary'
      //       buttonSize='btn--large'>
      //         Login with Facebook
      //       </Button>
      //     </div>
      //   </div>
      // </div>
  );
};
export default Landing;
