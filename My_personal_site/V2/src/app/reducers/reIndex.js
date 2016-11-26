import {combineReducers} from "redux";
import ProjectListReducer from "./ProjectList";
import ActiveProj from "./ActiveProj";

const allReducers = combineReducers({
  projList: ProjectListReducer,
  activeProj: ActiveProj
});

export default allReducers;
