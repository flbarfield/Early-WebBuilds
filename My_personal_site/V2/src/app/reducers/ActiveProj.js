export default function (state=null, action) {
  switch(action.type) {
  case "PROJ_SELECTED":
    return action.payload;
    break;
  }
  return state;
}
