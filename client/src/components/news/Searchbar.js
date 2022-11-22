import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

export default function SearchBar() {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };
  const onFormSubmit = async () => {
    const { data } = await axios.post('/api/news/get', { q: term });
    dispatch({ type: 'FETCH_NEWS', payload: data });
  };

  return (
    <form
      className='card  purple lighten-4 '
      onSubmit={() => {
        onFormSubmit();
      }}
    >
      <div class='input-field'>
        <input
          id='search'
          type='search'
          required
          value={term}
          style={{ display: 'inline' }}
          onChange={onInputChange}
        />
        <label class='label-icon' for='search'>
          <i class='material-icons'>search</i>
        </label>
        <i class='material-icons'>close</i>
      </div>
    </form>
  );
}
