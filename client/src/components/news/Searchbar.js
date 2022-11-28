import { useState } from 'react';
import axios from 'axios';
import { Search } from '../../svg';
export default function SearchBar({ dispatch }) {
  const [term, setTerm] = useState('');
  const color = '#65676b';
  const onInputChange = (event) => {
    setTerm(event.target.value);
  };
  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: 'NEWS_REQUEST' });
      const { data } = await axios.post('/api/getNews', {
        q: term,
      });
      dispatch({ type: 'NEWS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'NEWS_ERROR', payload: error.response.data.message });
    }
  };
  return (
    <form
      onSubmit={(e) => {
        onFormSubmit(e);
      }}
    >
      <div className='search search1'>
        <Search color={color} />
        <input
          type='text'
          required
          placeholder='Search News'
          className='hide_input'
          value={term}
          onChange={onInputChange}
        />
      </div>
    </form>
  );
}
