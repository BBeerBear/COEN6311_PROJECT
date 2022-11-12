import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import Select from 'react-select';

import { categories } from '../dashboard/CategoriesList';
import { countries } from './countriesList';

class Profile extends Component {
  state = {
    selectedOption: null,
    selectedCatergories: [],
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  categoriesOnChangeHandler = (selectedCatergories) => {
    this.setState({ selectedCatergories }, () =>
      console.log(`Catergory selected:`, this.state.selectedCatergories)
    );
    // );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <section className='container'>
        <h1>Edit Your Profile</h1>
        <p className='lead'>
          <i className='fas fa-user' />
          Add some changes to your profile
        </p>

        <form className='form'>
          <div className='App'>
            <p>Select a country</p>
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={countries}
            />
          </div>

          <p>Select categories you like</p>
          {categories.map((category) => (
            <p key={category.value}>
              <label>
                <input
                  type='checkbox'
                  value={category.value}
                  // onChange={categoriesOnChangeHandler}
                />
                <span>{category.label}</span>
              </label>
            </p>
          ))}
          <input type='submit' className='btn btn-primary my-1' />
          <Link className='btn btn-light my-1' to='/dashboard'>
            Go Back
          </Link>
        </form>
      </section>
    );
  }
}

//destruct state
function mapStateToProps({ profile }) {
  return { profile };
}
export default connect(mapStateToProps, actions)(Profile);
