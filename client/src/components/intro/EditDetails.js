import { useRef } from 'react';
import Select from 'react-select';
import { categories } from '../news/categoriesList';
import useOnCLickOutside from '../../helpers/clickOutside';
import { useState } from 'react';
import { countries } from './countriesList';
import axios from 'axios';
export default function EditDetails({
  details,
  handleChange,
  updateDetails,
  infos,
  setVisible,
  setInfos,
}) {
  const modal = useRef(null);
  useOnCLickOutside(modal, () => setVisible(false));
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categoriesOnChangeHandler = (e) => {
    if (e.target.checked && !selectedCategories.includes(e.target.value)) {
      selectedCategories.push(e.target.value);
    } else if (!e.target.checked) {
      const index = selectedCategories.indexOf(e.target.value);
      if (index !== -1) {
        selectedCategories.splice(index, 1);
      }
    }
    setInfos({ ...infos, [e.target.name]: selectedCategories });
  };
  const countryOnChangeHandler = (selectedOption) => {
    setSelectedOption(selectedOption);
    setInfos({
      ...infos,
      ['country']: selectedOption.value.toLowerCase(),
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    updateDetails();
  };

  return (
    <div className='blur'>
      <div className='postBox infosBox' ref={modal}>
        <div className='box_header'>
          <div className='small_circle' onClick={() => setVisible(false)}>
            <i className='exit_icon'></i>
          </div>
          <span>Edit Details</span>
        </div>
        <div className='details_wrapper scrollbar'>
          <div className='details_col'>
            <span>Customize Your Intro</span>
            <span>Details you select will be public</span>
          </div>

          <form className='form' onSubmit={onSubmit}>
            <div className='App'>
              <div className='details_header'>Country</div>
              <Select
                name='country'
                value={selectedOption}
                onChange={countryOnChangeHandler}
                options={countries}
              />
            </div>

            <div className='details_header'>Select categories you like</div>
            {categories.map((category) => (
              <p key={category.value}>
                <label>
                  <input
                    name='preferredCategories'
                    type='checkbox'
                    value={category.value}
                    onChange={categoriesOnChangeHandler}
                  />
                  <span>{category.label}</span>
                </label>
              </p>
            ))}
            <input type='submit' className='gray_btn hover1 w100' />
          </form>
        </div>
      </div>
    </div>
  );
}
