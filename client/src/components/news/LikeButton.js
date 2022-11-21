import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class LikeButton extends Component {
  onClick = () => {
    this.props.likeNews({ trend: this.props.trend });
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
function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, actions)(LikeButton);
