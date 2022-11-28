import './style.css';
import PulseLoader from 'react-spinners/PulseLoader';
import { useRef, useState } from 'react';
import { createPost } from '../../functions/post';
import axios from 'axios';

export default function CreatePost({ user, news }) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const textRef = useRef(null);

  const postSubmit = async () => {
    setLoading(true);
    //save news
    const { data } = await axios.post('/api/user/news/save', {
      news,
      user,
    });
    const response = await createPost(text, user._id, news.url);
    setLoading(false);
    if (response === 'ok') {
      setText('');
    } else {
      setError(response);
    }
  };

  return (
    <div className='createPost'>
      <div className='createPost_header'>
        <img src={user?.picture} alt='' />
        <div className='flex_center'>
          <textarea
            maxlength='100'
            value={text}
            placeholder={`What's on your mind, ${user.name}`}
            className='post_input'
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className='create_splitter'></div>
      <button
        className='post_submit'
        onClick={() => {
          postSubmit();
        }}
      >
        {loading ? <PulseLoader color='#fff' size={5} /> : 'Post'}
      </button>
    </div>
  );
}
