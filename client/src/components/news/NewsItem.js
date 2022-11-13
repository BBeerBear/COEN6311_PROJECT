import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import LikeButton from './LikeButton';
import SavedButton from './SavedButton';

class NewsList extends Component {
  render() {
    const trend = this.props.trend;
    return (
      <div className='container center'>
        <div className='row '>
          <div className='col s12 m7'>
            <div className='card big '>
              <div className='card-image'>
                <img src={trend.urlToImage} />
                {/* <span className='card-title'>{`"${trend.source.name}"`}</span> */}
              </div>
              <div className='card-content'>
                <p>{`"${trend.content}"`}</p>
              </div>
              <div className='card-action'>
                <a href={trend.url}>{`"${trend.title}"`}</a>
              </div>
            </div>
          </div>
          <div>
            <div>
              <SavedButton trend={trend} />
            </div>
            <div>
              <LikeButton trend={trend} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//destruct state
function mapStateToProps({ trends }) {
  return { trends };
}

export default connect(mapStateToProps, actions)(NewsList);
