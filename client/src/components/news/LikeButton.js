import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

export default function LikeButton({ news }) {
  const dispatch = useDispatch();
  const { user } = useSelector((user) => ({ ...user }));
  const onClick = async () => {
    const { data } = await axios.post('/api/user/news/like', { news, user });
    dispatch({ type: 'FETCH_USER', payload: data });
  };

  return (
    <a class='btn-floating btn-large waves-effect waves-light red'>
      <i class='material-icons' onClick={onClick}>
        favorite_border
      </i>
    </a>
  );
}
