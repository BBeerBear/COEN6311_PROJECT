import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SavedButton extends Component {
  state = { liked: false };

  toggle = () => {
    // console.log(this.props.activity.savedNews);
    // let localLiked = activity.savedNews.map().contains(trend.url);

    // if (localLiked) {
    // } else {
    this.props.saveSavedNewsOfActivity({ trend: this.props.trend });
    // }

    // // Toggle the state variable liked
    // localLiked = !localLiked;
    // this.setState({ liked: localLiked });
  };

  render() {
    return (
      <a class='btn-floating btn-large waves-effect waves-light '>
        <i class='material-icons' onClick={this.toggle}>
          {this.state.liked ? 'bookmark' : 'bookmark_border'}
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
