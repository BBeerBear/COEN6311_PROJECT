import { categories } from './CategoriesList';
import * as actions from '../../actions';
import { Component } from 'react';
import { connect } from 'react-redux';
import Searchbar from './Searchbar';

class Categories extends Component {
  render() {
    return (
      <nav>
        <div className='nav-wrapper center'>
          <div className='col s12'>
            <a
              href='#'
              className='breadcrumb'
              onClick={() => {
                this.props.getProfile();
                //find news based on country and category
                console.log('me', this.props.profile);
                this.props.profile.profile[0].preferredCategories.map(
                  (catergory) => {
                    console.log(
                      catergory,
                      this.props.profile.profile[0].country
                    );
                    this.props.fecthNewsFromAPI({
                      country: this.props.profile.profile[0].country,
                      category: catergory,
                      pageSize: 10,
                    });
                  }
                );
                // console.log(this.props.trends);
              }}
            >
              Recommended News
            </a>
            <a
              href='#'
              className='breadcrumb'
              onClick={() => {
                this.props.fecthNewsFromAPI({
                  country: this.props.profile.profile[0].country,
                });
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
                    country: 'ca',
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
function mapStateToProps({ trends, activity, profile }) {
  return { trends, activity, profile };
}

export default connect(mapStateToProps, actions)(Categories);
