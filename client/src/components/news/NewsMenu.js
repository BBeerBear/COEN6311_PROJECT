import { useRef } from 'react';
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
      <div onClick={() => saveHandler()}>
        {checkSaved ? (
          <MenuItem
            icon='save_icon'
            title='Unsave News'
            subtitle='Remove this from your saved news.'
          />
        ) : (
          <MenuItem
            icon='save_icon'
            title='Save News'
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
    </ul>
  );
}
