import { categories } from './CategoriesList';
import * as actions from '../../actions';
import { Component } from 'react';
import { connect } from 'react-redux';

class Categories extends Component {
  render() {
    const country = 'ca';
    return (
      <nav>
        <div className='nav-wrapper center'>
          <div className='col s12'>
            <a
              href='#'
              className='breadcrumb'
              onClick={() => {
                this.props.fecthNewsFromAPI({ country });
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
                console.log('trends', this.props.trends);
              }}
            >
              My Saved News
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

//destruct state
function mapStateToProps({ trends, activity }) {
  return { trends, activity };
}

export default connect(mapStateToProps, actions)(Categories);
