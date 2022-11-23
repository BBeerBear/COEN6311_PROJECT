import './style.css';
import LeftLink from './LeftLink';

import { Link } from 'react-router-dom';
import { left } from '../../../data/home';

export default function LeftHome({ user }) {
  return (
    <div className='left_home scrollbar'>
      <Link to='/profile' className='left_link hover1'>
        <img src={user?.picture} alt='' />
        <span>
          {user?.first_name} {user?.last_name}
        </span>
      </Link>
      {left.slice(0, 8).map((link, i) => (
        <LeftLink
          key={i}
          img={link.img}
          text={link.text}
          // notification={link.notification}
        />
      ))}
    </div>
  );
  // return (
  //   <ul id='sidebar-1' class='sidenav sidenav-fixed'>
  //     <li key={1}>
  //       <div class='user-view'>
  //         <div class='background   pink lighten-3'></div>
  //         <a href='#!user'>
  //           <img class='circle' src={user?.picture} />
  //         </a>
  //         <a href='#!name'>
  //           <span class='white-text name'>{user?.name}</span>
  //         </a>
  //         <a href='#!email'>
  //           <span class='white-text email'>{user?.email}</span>
  //         </a>
  //       </div>
  //     </li>
  //     <li key={2}>
  //       <Link to='/profile/me'>My profile</Link>
  //     </li>
  //     <li key={3}>
  //       {/* <Link onClick={() => this.props.getUsers()} to='/profile/others'>
  //         Recommended Users
  //       </Link> */}
  //     </li>
  //   </ul>
  // );
}
