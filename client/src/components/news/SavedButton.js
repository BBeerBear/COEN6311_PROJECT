import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SavedButton extends Component {
  onClick = () => {
    this.props.saveUserSavedNewsToDB({ trend_id: this.props.trend_id });
  };
  render() {
    return (
      <a class='btn-floating btn-large waves-effect waves-light red'>
        <i class='material-icons' onClick={this.onClick}>
          add
        </i>
      </a>
    );
  }
}

//destruct state
function mapStateToProps({ activity }) {
  return { activity };
}

export default connect(mapStateToProps, actions)(SavedButton);
