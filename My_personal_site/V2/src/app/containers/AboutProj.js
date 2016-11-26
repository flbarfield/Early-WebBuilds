import React, {Component} from 'react';
import {connect} from "react-redux";
import Footer from "../components/Footer";

class AboutProj extends Component {
  render() {
    if (!this.props.proj) {
      return(<div></div>)
    }
    return(
      <div>
        <div className='imported-content'>
          <div className='project-info project-wrapper'>
            <div className='proj-pic-wrapper col-xs-12 col-sm-12 col-md-7'>
              <a href='javascript:void(0)'><img src={this.props.proj.img}/></a>
            </div>
            <a href='javascript:void(0)'><p className='hidden-md hidden-lg mobile-clicky'>TAP HERE TO VIEW</p></a>
            <div className='proj-text col-md-5 col-xs-12'>
              <h1 className='page-heading-additional'>What is this project about?</h1>
              <p>{this.props.proj.description}</p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    proj: state.activeProj
  };
}

// function matchDispatchtoProps(dispatch) {
//   return bindActionCreators({projList.projList}, dispatch)
// }

export default connect(mapStatetoProps)(AboutProj);
