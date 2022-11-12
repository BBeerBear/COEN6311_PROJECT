import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Preloader from '../layout/Preloader';

class NewsList extends Component {
  renderContent() {
    switch (this.props.trends) {
      case null:
        return <Preloader />;
      case false:
        return <div>Error!</div>;
      default: {
        return (
          <div>
            {this.props.trends.map((trend) => (
              <div className='row ' key={trend.id}>
                <div className='col s12 m7'>
                  <div className='card small '>
                    <div className='card-image'>
                      <img src={trend.imgUrl} />
                      <span className='card-title'>
                        {`"${trend.keywords.toString()}"`}
                      </span>
                    </div>
                    <div className='card-content'>
                      <p>{`"${trend.snippet}"`}</p>
                    </div>
                    <div className='card-action'>
                      <a href={trend.newsUrl}>{`"${trend.articleTitle}"`}</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      }
    }
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

//destruct state
function mapStateToProps({ trends }) {
  return { trends };
}

export default connect(mapStateToProps, actions)(NewsList);
