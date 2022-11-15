import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import Select from 'react-select';

import { categories } from '../news/CategoriesList';
import { countries } from './countriesList';

class ProfileEdit extends Component {
  state = {
    selectedOption: null,
    selectedCatergories: [],
  };

  //select a country
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  onFormSubmit = (event) => {
    console.log(
      this.state.selectedCatergories,
      this.state.selectedOption.value.toLowerCase()
    );
    event.preventDefault();
    this.props.createProfile({
      preferredCategories: this.state.selectedCatergories,
      country: this.state.selectedOption.value.toLowerCase(),
    });
  };

  //select categories
  categoriesOnChangeHandler = (e) => {
    if (
      e.target.checked &&
      !this.state.selectedCatergories.includes(e.target.value)
    ) {
      this.state.selectedCatergories.push(e.target.value);
    } else if (!e.target.checked) {
      const index = this.state.selectedCatergories.indexOf(e.target.value);
      if (index !== -1) {
        this.state.selectedCatergories.splice(index, 1);
      }
    }
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <>
        <section className='container'>
          <p className='lead'>
            <i className='fas fa-user' />
            Add some changes to your profile
          </p>

          <form className='form' onSubmit={this.onFormSubmit}>
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
                    onChange={this.categoriesOnChangeHandler}
                  />
                  <span>{category.label}</span>
                </label>
              </p>
            ))}
            {/* routing to dashboard */}
            {/* <Link to='/dashboard' onClick={}> */}
            <input type='submit' className='btn btn-primary my-1' />
            {/* </Link> */}
          </form>
        </section>
      </>
    );
  }
}

//destruct state
function mapStateToProps({ profile }) {
  return { profile };
}
export default connect(mapStateToProps, actions)(ProfileEdit);
