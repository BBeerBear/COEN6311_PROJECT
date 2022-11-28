import { useEffect, useRef, useState } from 'react';
import { ClipLoader } from 'react-spinners';
export default function CreateComment({ user, postId, setComments }) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [cursorPosition, setCursorPosition] = useState();
  const textRef = useRef(null);
  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);

  const handlePost = async (e) => {
    if (e.key === 'Enter') {
      setLoading(true);
      // const post = await post(news._id, text);
      setLoading(false);
      setText('');
    }
  };
  return (
    <div className='create_comment_wrap'>
      <div className='create_comment'>
        <img src={user?.picture} alt='' />
        <div className='comment_input_wrap'>
          <input
            type='text'
            ref={textRef}
            value={text}
            placeholder='Write a comment...'
            onChange={(e) => setText(e.target.value)}
            onKeyUp={handlePost}
          />
          <div className='comment_circle' style={{ marginTop: '5px' }}>
            <ClipLoader size={20} color='#1876f2' loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
}
