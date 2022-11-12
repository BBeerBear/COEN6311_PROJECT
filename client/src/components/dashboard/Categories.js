import { categories } from './CategoriesList';
import * as actions from '../../actions';
import { Component } from 'react';
import { connect } from 'react-redux';

class Categories extends Component {
  render() {
    return (
      <nav>
        <div className='nav-wrapper center'>
          <div className='col s12'>
            {categories.map((category) => (
              <a
                href='#'
                onClick={() => {
                  this.props.saveNewsToDB({
                    category: category.value,
                    geo: 'US',
                  });
                }}
                className='breadcrumb'
              >
                {category.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    );
  }
}

export default connect(null, actions)(Categories);
