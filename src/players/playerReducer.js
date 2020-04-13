import {
  FETCH_PLAYERS_REQUEST,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_FAILURE,
} from "./playerTypes";

const startState = {
  loading: false,
  players: [],
  error: "",
};

const playerReducer = (state = startState, action) => {
  switch (action.type) {
    case FETCH_PLAYERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PLAYERS_SUCCESS:
      return {
        loading: false,
        players: action.payload,
        error: "",
      };
    case FETCH_PLAYERS_FAILURE:
      return {
        loading: false,
        ...state,
        players: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default playerReducer;
