import {combineReducers} from "redux";
import ProjectListReducer from "./ProjectList";

const allReducers = combineReducers({
  projList: ProjectListReducer
});

export default allReducers;
