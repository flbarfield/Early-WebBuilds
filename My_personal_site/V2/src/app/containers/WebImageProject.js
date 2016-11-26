import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {selectProject} from "../actions/ActIndex";

class WebImageProjectList extends Component {
  createWebImageItems(){
    return this.props.projList.map((projList) => {
      return(
        <div key={projList.key} onClick={() => this.props.selectProject(projList)}>
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

function matchDispatchtoProps(dispatch) {
  return bindActionCreators({selectProject: selectProject}, dispatch)
}

export default connect(mapStatetoProps, matchDispatchtoProps)(WebImageProjectList);
