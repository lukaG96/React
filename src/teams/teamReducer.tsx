import {
  FETCH_TEAMS_REQUEST,
  FETCH_TEAMS_SUCCESS,
  FETCH_TEAMS_FAILURE,
} from "./teamTypes";

const startState = {
  loading: false,
  teams: [],
  error: "",
};

const teamsReducer = (state = startState, action: any) => {
  switch (action.type) {
    case FETCH_TEAMS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TEAMS_SUCCESS:
      return {
        loading: false,
        teams: action.payload,
        error: "",
      };
    case FETCH_TEAMS_FAILURE:
      return {
        loading: false,
        ...state,
        teams: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default teamsReducer;
