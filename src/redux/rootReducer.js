import { combineReducers } from "redux";
import teamReducer from "../teams/teamReducer";

const rootReducer = combineReducers({
  teamsKey: teamReducer,
});

export default rootReducer;
