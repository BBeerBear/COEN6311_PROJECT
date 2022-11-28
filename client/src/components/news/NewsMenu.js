import { useRef, useState } from 'react';
import MenuItem from './MenuItem';
import useOnClickOutside from '../../helpers/clickOutside';
import { saveNews } from '../../functions/user';
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

  return (
    <ul className='post_menu' ref={menu}>
      {test && <MenuItem icon='pin_icon' title='Pin Post' />}
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
      <MenuItem img='../../../icons/lock.png' title='Edit audience' />
      <MenuItem
        icon='turnOffNotifications_icon'
        title='Turn off notifications for this news'
      />
      <MenuItem icon='date_icon' title='Edit Date' />
      (
      <MenuItem icon='refresh_icon' title='Refresh share attachment' />
      )x
      <MenuItem icon='archive_icon' title='Move to archive' />
      <div className='line'></div>
      <MenuItem
        img='../../../icons/report.png'
        title='Rate the post'
        subtitle="i'm concerned about this post"
      />
    </ul>
  );
}
