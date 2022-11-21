import { categories } from './CategoriesList';
import * as actions from '../../actions';
import { Component } from 'react';
import { connect } from 'react-redux';
import Searchbar from './Searchbar';

class Categories extends Component {
  render() {
    const current_user = this.props.user.user;
    return (
      <nav>
        <div className='nav-wrapper center'>
          <div className='col s12'>
            <a
              href='#'
              className='breadcrumb'
              onClick={() => {
                // this.props.getProfile();
                if (current_user) {
                  //find news based on country and category
                  current_user.preferredCategories.map((catergory) => {
                    this.props.fecthNewsFromAPI({
                      country: current_user.country,
                      category: catergory,
                      pageSize: 10,
                    });
                  });
                }
              }}
            >
              Recommended News
            </a>
            <a
              href='#'
              className='breadcrumb'
              onClick={() => {
                if (this.props.getProfile()) {
                  this.props.fecthNewsFromAPI({
                    country: current_user.country,
                  });
                }
              }}
            >
              Local News
            </a>
            {/*get trends by categories */}
            {categories.map((category) => (
              <a
                href='#'
                onClick={() => {
                  this.props.fecthNewsFromAPI({
                    category: category.value,
                  });
                }}
                className='breadcrumb'
              >
                {category.label}
              </a>
            ))}
            <a
              href='#'
              className='breadcrumb'
              onClick={() => {
                this.props.fetchSavedNewsOfActivity();
              }}
            >
              My Saved News
            </a>
            <Searchbar />
          </div>
        </div>
      </nav>
    );
  }
}

//destruct state
function mapStateToProps({ trends, user }) {
  return { trends, user };
}

export default connect(mapStateToProps, actions)(Categories);
