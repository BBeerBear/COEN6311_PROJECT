import './style.css';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/header';
import LeftHome from '../../components/home/left';
import RightHome from '../../components/home/right';
import News from '../news/NewsPage';

export default function Home() {
  //   const { user } = useSelector((state) => ({ ...state }));
  //   const middle = useRef(null);
  //   const [height, setHeight] = useState();
  //   useEffect(() => {
  //     setHeight(middle.current.clientHeight);
  //   }, []);
  //   return (
  //     <div className='home' style={{ height: `${height + 150}px` }}>
  //       <Header page='home' />
  //       <LeftHome user={user} />
  //       <div className='home_middle' ref={middle}>
  //         <News />
  //       </div>
  //       <RightHome user={user} />
  //     </div>
  //   );
  const { user } = useSelector((state) => ({ ...state }));
  const middle = useRef(null);
  const [height, setHeight] = useState();
  useEffect(() => {
    setHeight(middle.current.clientHeight);
  }, []);
  return (
    <div className='home' style={{ height: `${height + 150}px` }}>
      <Header page='home' />
      <LeftHome user={user} />
      <div className='home_middle' ref={middle}>
        {/* <Stories />
        {user.verified === false && <SendVerification user={user} />}
        <CreatePost user={user} setVisible={setVisible} />
        <div className='posts'>
          {posts.map((post) => (
            <Post key={post._id} post={post} user={user} />
          ))}
        </div> */}
        <News />
      </div>
      <RightHome user={user} />
    </div>
  );
}
