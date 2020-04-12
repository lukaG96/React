import React, { useEffect, useState } from "react";

function TeamDetails(props) {
  const [teamId, setteamId] = useState(null);
  //const [team, setteam] = useState({});

  useEffect(() => {
    let id = props.match.params.team_id;
    setteamId(id);
  }, [props.match.params]);
  //console.log(props);
  return <div>{teamId}</div>;
}

export default TeamDetails;
