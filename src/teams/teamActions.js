import axios from "axios";
import {
  FETCH_TEAMS_REQUEST,
  FETCH_TEAMS_SUCCESS,
  FETCH_TEAMS_FAILURE,
} from "./teamTypes";

export const fetchTeamsRequest = () => {
  return {
    type: FETCH_TEAMS_REQUEST,
  };
};
export const fetchTeamsSuccess = (teams) => {
  return {
    type: FETCH_TEAMS_SUCCESS,
    payload: teams,
  };
};
export const fetchTeamsFailure = (errors) => {
  return {
    type: FETCH_TEAMS_FAILURE,
    payload: errors,
  };
};

export const fetchTeams = () => {
  return (dispatch) => {
    dispatch(fetchTeamsRequest());
    axios
      .get("https://balldontlie.io/api/v1/teams")
      .then((response) => {
        const teams = response.data.data;
        dispatch(fetchTeamsSuccess(teams));
      })
      .catch((error) => {
        const errorMessage = error.Message;
        dispatch(fetchTeamsFailure(errorMessage));
      });
  };
};
//test
