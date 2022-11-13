import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import LikeButton from './LikeButton';
import SavedButton from './SavedButton';

class NewsList extends Component {
  renderContent() {
    switch (this.props.trends) {
      case null:
        return (
          <div className='spinner-layer spinner-red center'>
            <div className='circle-clipper left'>
              <div className='circle'></div>
            </div>
            <div className='gap-patch'>
              <div className='circle'></div>
            </div>
            <div className='circle-clipper right'>
              <div className='circle'></div>
            </div>
          </div>
        );
      case false:
        return <div>Error!</div>;
      default: {
        return (
          <div className='container'>
            {this.props.trends.map((trend) => (
              <div className='row '>
                <div className='col s12 m7'>
                  <div className='card big '>
                    <div className='card-image'>
                      <img src={trend.urlToImage} />
                      <span className='card-title'>
                        {`"${trend.source.name}"`}
                      </span>
                    </div>
                    <div className='card-content'>
                      <p>{`"${trend.content}"`}</p>
                    </div>
                    <div className='card-action'>
                      <a href={trend.url}>{`"${trend.title}"`}</a>
                    </div>
                  </div>
                </div>
                {/* <div>
                  <div>
                    <SavedButton trend_id={trend._id} />
                  </div>
                </div>
                <div>
                  <LikeButton trend_id={trend._id} />
                </div> */}
              </div>
            ))}
          </div>
        );
      }
    }
  }
  render() {
    return this.renderContent();
  }
}

//destruct state
function mapStateToProps({ trends }) {
  return { trends };
}

export default connect(mapStateToProps, actions)(NewsList);
