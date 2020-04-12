import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function TeamDetails(props) {
  const teamFromRedux = useSelector((state) =>
    state.teamsKey.teams.find(
      (x) => x.id === parseInt(props.match.params.team_id)
    )
  );
  const [team, setTeam] = useState({});

  function mapTeam() {
    if (teamFromRedux) {
      setTeam({
        name: teamFromRedux.name,
        abbreviation: teamFromRedux.abbreviation,
        city: teamFromRedux.city,
        conference: teamFromRedux.conference,
        division: teamFromRedux.division,
        full_name: teamFromRedux.full_name,
      });
    } else {
      //redirect to error page
    }
  }

  useEffect(() => {
    mapTeam();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return team ? <div>{team.full_name}</div> : <div> no data </div>;
}

export default TeamDetails;
