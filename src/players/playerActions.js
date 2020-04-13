import axios from "axios";
import {
  FETCH_PLAYERS_REQUEST,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_FAILURE,
} from "./playerTypes";

export const fetchPlayersRequest = () => {
  return {
    type: FETCH_PLAYERS_REQUEST,
  };
};
export const fetchPlayersSuccess = (players) => {
  return {
    type: FETCH_PLAYERS_SUCCESS,
    payload: players,
  };
};
export const fetchPlayersFailure = (errors) => {
  return {
    type: FETCH_PLAYERS_FAILURE,
    payload: errors,
  };
};

export const fetchPlayers = () => {
  return (dispatch) => {
    dispatch(fetchPlayersRequest());
    axios
      .get("/api/v1/players")
      .then((response) => {
        const players = response.data.data;
        dispatch(fetchPlayersSuccess(players));
      })
      .catch((error) => {
        const errorMessage = error.Message;
        dispatch(fetchPlayersFailure(errorMessage));
      });
  };
};
