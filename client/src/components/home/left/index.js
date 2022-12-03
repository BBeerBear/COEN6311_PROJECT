import './style.css';
import LeftLink from './LeftLink';

import { Link } from 'react-router-dom';
import { left } from '../../../data/home';

export default function LeftHome({ user }) {
  return (
    <div className='left_home scrollbar'>
      <Link to='/profile' className='left_link hover1'>
        <img src={user?.picture} alt='' />
        <span>{user?.name}</span>
      </Link>
      <Link to='/friends/find'>
        <LeftLink
          key={0}
          img={left[0].img}
          text={left[0].text}
          // notification={link.notification}
        />
      </Link>
      <Link to='/profile'>
        <LeftLink
          key={1}
          img={left[1].img}
          text={left[1].text}
          // notification={link.notification}
        />
      </Link>
      <Link to='/messenger'>
        <LeftLink
          key={3}
          img={left[3].img}
          text={left[3].text}
          // notification={link.notification}
        />
      </Link>
      {/* {left.slice(2, 4).map((link, i) => (
        <LeftLink
          key={i}
          img={link.img}
          text={link.text}
          // notification={link.notification}
        />
      ))} */}
    </div>
  );
}
