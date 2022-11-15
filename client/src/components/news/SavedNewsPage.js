import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import NotFound from '../layout/NotFound';
import Spinner from '../layout/Spinner';
import NewsItem from './NewsItem';

class SavedNewsPage extends Component {
  componentDidMount() {
    this.props.fetchActivity();
  }

  renderContent() {
    switch (this.props.activity) {
      case null:
        return <Spinner />;
      case false:
        return <NotFound />;
      default: {
        return (
          <div className='container'>
            {this.props.activity.savedNews.map((trend) => (
              <NewsItem trend={trend} />
            ))}
          </div>
        );
      }
    }
  }
  render() {
    return <div> {this.renderContent()} </div>;
  }
}

//destruct state
function mapStateToProps({ activity }) {
  return { activity };
}

export default connect(mapStateToProps, actions)(SavedNewsPage);
