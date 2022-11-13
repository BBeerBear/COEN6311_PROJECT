import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class LikeButton extends Component {
  onClick = () => {
    // this.props.saveUserSavedNewsToDB({ trend_id: this.props.trend_id });
    this.props.savelikedNewsOfActivity({ trend: this.props.trend });
  };
  render() {
    return (
      <a class='btn-floating btn-large waves-effect waves-light red'>
        <i class='material-icons' onClick={this.onClick}>
          favorite_border
        </i>
      </a>
    );
  }
}

//destruct state
function mapStateToProps({ activity }) {
  return { activity };
}

export default connect(mapStateToProps, actions)(LikeButton);
