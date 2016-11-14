import React from "react";
import {connect} from "react-redux";

import { User } from './User';
import { Main } from './Main';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName("Anna")}/>
                <User username={this.props.user.name}/>
            </div>
        );
    }
}

//which props of my global app state do I want to use in this Component
//and then to which local properties do I want to map them

// purposefully showed two ways of defining your states below
const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.mathReducer
  };
};

// function that dispatches action. Not setting the arg and hardcoding
// the payload is also possible.
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "SET_NAME",
        payload: name
      });
    }
  };
};

//connect function is called to tell that these components should be connected
//to the redux store because Provider is currently only getting the base
//application. This is good because you can then specify which global
//props will get mapped to which local ones within the component.
export default connect(mapStateToProps, mapDispatchToProps)(App);
