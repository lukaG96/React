import React, { useState, useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { FlexContainer } from "../_styledComponents/flexContainer";
import TeamIcon from "./TeamIcon";
import axios from "axios";
import TeamScoreIcon from "../scores/teamScoreIcon";

const startState = {
  loading: true,
  error: "",
  data: [],
};
const TeamScoreReducer = (state, action) => {
  switch (action.message) {
    case "Success":
      return {
        loading: false,
        data: action.data,
        error: "",
      };
    case "Error":
      return {
        loading: false,
        data: {},
        error: action.data,
      };
    default:
      return state;
  }
};

function TeamDetails(props) {
  const [team, setTeam] = useState({});
  const [teamScore, setTeamScore] = useReducer(TeamScoreReducer, startState);
  const teamFromRedux = useSelector((state) =>
    state.teamsKey.teams.find(
      (x) => x.id === parseInt(props.match.params.team_id)
    )
  );

  useEffect(() => {
    mapTeam();
    fetchTeamScore(teamFromRedux.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function mapTeam() {
    if (teamFromRedux) {
      setTeam({
        // id: teamFromRedux.id,
        // name: teamFromRedux.name,
        // abbreviation: teamFromRedux.abbreviation,
        // city: teamFromRedux.city,
        // conference: teamFromRedux.conference,
        // division: teamFromRedux.division,
        // full_name: teamFromRedux.full_name,
        ...teamFromRedux,
      });
    } else {
      //redirect to error page
    }
  }
  function fetchTeamScore(teamId) {
    axios
      .get("api/v1/games?seasons[]=2018&seasons[]=2017&team_ids[]=" + teamId)
      .then((response) => {
        let scores = response.data.data;
        setTeamScore({ message: "Success", data: scores });
      })
      .catch((error) => {
        setTeamScore({ message: "Error", data: error.message });
      });
    console.log(teamScore);
  }
  return team ? (
    <FlexContainer>
      <TeamIcon key={team.id} team={team} fullData showBtn={false} />
      <FlexContainer>
        {teamScore &&
          teamScore.data &&
          teamScore.data.map((score) => (
            <TeamScoreIcon key={score.id} score={score} />
          ))}
      </FlexContainer>
    </FlexContainer>
  ) : (
    <div> no data </div>
  );
}

export default TeamDetails;
