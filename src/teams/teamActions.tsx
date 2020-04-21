import axios from "axios";
import {
  FETCH_TEAMS_REQUEST,
  FETCH_TEAMS_SUCCESS,
  FETCH_TEAMS_FAILURE,
} from "./teamTypes";
import { TeamModel } from "../Models/teamDTO";

export const fetchTeamsRequest = () => {
  return {
    type: FETCH_TEAMS_REQUEST,
  };
};
export const fetchTeamsSuccess = (teams: TeamModel[]) => {
  return {
    type: FETCH_TEAMS_SUCCESS,
    payload: teams,
  };
};
export const fetchTeamsFailure = (errors: any) => {
  return {
    type: FETCH_TEAMS_FAILURE,
    payload: errors,
  };
};

export const fetchTeams = () => {
  return (dispatch: any) => {
    dispatch(fetchTeamsRequest());
    axios
      .get("/api/v1/teams")
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
