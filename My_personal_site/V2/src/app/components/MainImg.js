import React from "react";

export default class MainImg extends React.Component {
  render () {
    return (
      <div>
        <div>
          <div className='project-wrapper'>
            <div className={this.props.imageWrapStyling}>
              <img className='col-xs-12 col-sm-12 col-md-12' src={this.props.img}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
