import { categories } from './CategoriesList';
import * as actions from '../../actions';
import { Component } from 'react';
import { connect } from 'react-redux';

class Categories extends Component {
  mySavedListOnClick = () => {
    //get activity
    this.props.saveUserSavedNewsToDB();
    if (this.props.activity) {
      this.props.fetctNewsFromDB({
        trend_ids: this.props.activity.savedNews,
      });
    } else {
      this.props.trends = null;
    }
  };
  render() {
    return (
      <nav>
        <div className='nav-wrapper center'>
          <div className='col s12'>
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

            {/* change trends to saved news list */}
            <a
              href='#'
              className='breadcrumb'
              onClick={this.mySavedListOnClick}
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
function mapStateToProps({ activity }) {
  return { activity };
}

export default connect(mapStateToProps, actions)(Categories);
