import { useState } from 'react';
import NewsMenu from './NewsMenu';
import { Dots } from '../../svg';
import CreateComment from './CreateComment';
import { Link } from 'react-router-dom';
import StarsRating from 'stars-rating';
import { rateNews } from '../../functions/user';
export default function NewsItem({ news, user, profile }) {
  const [visible, setVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [checkSaved, setCheckSaved] = useState();
  const ratingChanged = (star) => {
    rateNews({ star, news });
  };
  return (
    <div className='post'>
      <div className='post_header'>
        <Link to={`/profile/${user._id}`} className='post_header_left'>
          <img src={user.picture} alt='' />
          <div className='header_col'>
            <div className='post_profile_name'>{user.name}</div>
          </div>
        </Link>
        <div
          className='post_header_right hover1'
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <Dots color='#828387' />
        </div>
      </div>
      <div
        className='post_bg'
        style={{ backgroundImage: `url(${news.urlToImage})` }}
      >
        <div className='post_bg_text'>{news.title}</div>
      </div>
      <div className='post_actions'>
        <div className='post_action hover1'>
          <i className='like_icon'></i>
          <span>Like</span>
        </div>
        <div className='post_action hover1'>
          <StarsRating
            count={5}
            onChange={ratingChanged}
            size={24}
            color2={'#ffd700'}
          />
        </div>
        <div
          className='post_action hover1'
          onMouseOver={() => {
            setTimeout(() => {
              setVisible(true);
            }, 500);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setVisible(false);
            }, 500);
          }}
        >
          <i className='share_icon'></i>
          <span>Share</span>
        </div>
      </div>
      <div className='comments_wrap'>
        <div className='comments_order'></div>
        <CreateComment user={user} news={news} />
      </div>
      {showMenu && (
        <NewsMenu
          news={news}
          setShowMenu={setShowMenu}
          checkSaved={checkSaved}
          setCheckSaved={setCheckSaved}
        />
      )}
    </div>
  );
}
