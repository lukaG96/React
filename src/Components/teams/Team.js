import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeams } from "../../redux/index";
import TeamIcon from "./TeamIcon";
import { FlexContainer } from "../_styledComponents/flexContainer";

function Team() {
  const teams = useSelector((state) => state.teamsKey);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeams());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return teams.loading ? (
    <h2>Loading data</h2>
  ) : teams.errors ? (
    <h2>{teams.errors}</h2>
  ) : (
    <FlexContainer>
      {teams &&
        teams.teams &&
        teams.teams.map((team) => (
          <TeamIcon key={team.id} team={team} fullData={false} showBtn />
        ))}
    </FlexContainer>
  );
}

export default Team;
