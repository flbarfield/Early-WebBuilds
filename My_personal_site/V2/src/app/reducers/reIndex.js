import {combineReducers} from "redux";
import ProjectListReducer from "./ProjectList";
import AboutProj from "./AboutList";

const allReducers = combineReducers({
  projList: ProjectListReducer,
  aboutProj: AboutProj
});

export default allReducers;
