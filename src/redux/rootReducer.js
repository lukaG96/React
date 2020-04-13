import { combineReducers } from "redux";
import teamReducer from "../teams/teamReducer";
import playerReducer from "../players/playerReducer";

const rootReducer = combineReducers({
  teamsKey: teamReducer,
  playersKey: playerReducer,
});

export default rootReducer;
