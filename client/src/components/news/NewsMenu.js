import { useRef, useState } from 'react';
import MenuItem from './MenuItem';
import useOnClickOutside from '../../helpers/clickOutside';
import { saveNews } from '../../functions/user';
import StarsRating from 'stars-rating';

export default function NewsMenu({
  news,
  setShowMenu,
  checkSaved,
  setCheckSaved,
}) {
  const menu = useRef(null);
  useOnClickOutside(menu, () => setShowMenu(false));
  const saveHandler = async () => {
    saveNews(news);
    if (checkSaved) {
      setCheckSaved(false);
    } else {
      setCheckSaved(true);
    }
  };
  // const deleteHandler = async () => {
  //   const res = await deletePost(news);
  //   if (res.status === 'ok') {
  //     postRef.current.remove();
  //   }
  // };
  const ratingChanged = (newRating) => {
    console.log(typeof newRating);
  };
  return (
    <ul className='post_menu' ref={menu}>
      <div onClick={() => saveHandler()}>
        {checkSaved ? (
          <MenuItem
            icon='save_icon'
            title='Unsave Post'
            subtitle='Remove this from your saved news.'
          />
        ) : (
          <MenuItem
            icon='save_icon'
            title='Save Post'
            subtitle='Add this to your saved news.'
          />
        )}
      </div>
      <div className='line'></div>
      <MenuItem
        icon='turnOnNotification_icon'
        title='Turn on notifications for this news'
      />
      <MenuItem
        icon='turnOffNotifications_icon'
        title='Turn off notifications for this news'
      />
      <div className='line'></div>
      <MenuItem
        img='../../../icons/report.png'
        title='Rate the trending news'
        subtitle="i'm concerned about this news"
      />
      <StarsRating
        count={5}
        onChange={ratingChanged}
        size={24}
        color2={'#ffd700'}
      />
    </ul>
  );
}
