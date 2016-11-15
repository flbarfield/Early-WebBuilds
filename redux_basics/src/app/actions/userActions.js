// actions are things your going to be dispatching later on

export function setName(name) {
  return {
    type: "SET_NAME",
    payload: name
  };
}

export function setAge(age) {
  return {
    type: "SET_AGE",
    payload: age
  };
}
