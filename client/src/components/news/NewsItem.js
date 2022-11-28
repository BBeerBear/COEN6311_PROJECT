import { useState } from 'react';
import NewsMenu from './NewsMenu';
export default function NewsItem({ news, user, profile }) {
  const [visible, setVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [checkSaved, setCheckSaved] = useState();
  return (
    <div className='post'>
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
          <i className='save_icon'></i>
          <span>Save</span>
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
