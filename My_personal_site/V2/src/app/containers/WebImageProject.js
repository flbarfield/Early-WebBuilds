import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class WebImageProjectList extends Component {
  createWebImageItems(){
    return this.props.projList.map((projList) => {
      return(
        <div key={projList.key}>
          <div className='project-wrapper'>
            <div className={projList.imageWrapStyling}>
              <a href='#' className={projList.id}><img className='col-xs-12 col-sm-12 col-md-12' src={projList.img}/></a>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.createWebImageItems()}
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    projList: state.projList
  };
}

export default connect(mapStatetoProps)(WebImageProjectList);
