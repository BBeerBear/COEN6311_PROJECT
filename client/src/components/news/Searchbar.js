import * as acitons from '../../actions';
import { connect } from 'react-redux';
import { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.fecthNewsFromAPI({ q: this.state.term });
  };
  render() {
    return (
      <form className='container blue' onSubmit={this.onFormSubmit}>
        <div class='input-field'>
          <input
            id='search'
            type='search'
            required
            value={this.state.term}
            style={{ display: 'inline' }}
            onChange={this.onInputChange}
          />
          <label class='label-icon' for='search'>
            <i class='material-icons'>search</i>
          </label>
          <i class='material-icons'>close</i>
        </div>
      </form>
    );
  }
}
//destruct state
function mapStateToProps({ trends }) {
  return { trends };
}

export default connect(mapStateToProps, acitons)(SearchBar);
