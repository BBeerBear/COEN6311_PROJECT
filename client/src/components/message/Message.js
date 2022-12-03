import './message.css';
// import { format } from 'timeago.js';

export default function Message({ message, own, currentUser }) {
  return (
    <div className={own ? 'message own' : 'message'}>
      <div className='messageTop'>
        <img
          className='messageImg'
          src={own ? currentUser?.picture : message?.sender.picture}
          alt=''
        />
        <p className='messageText'>{message.text}</p>
      </div>
      <div className='messageBottom'> {message.createdAt}</div>
    </div>
  );
}
