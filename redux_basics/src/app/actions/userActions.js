// actions are things your going to be dispatching later on

export function setName(name) {
  ///// How to set a timeout with thunk middleware.
  // return dispatch => {
  //   setTimeout(() => {
  //     dispatch({
  //       type:"SET_NAME",
  //       payload: name
  //     });
  //   },2000);
  // }

  ///Timeout with promise package////
  return {
    type:"SET_NAME",
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(name);
      }, 2000);
    })
  };
}

export function setAge(age) {
  return {
    type: "SET_AGE",
    payload: age
  };
}
