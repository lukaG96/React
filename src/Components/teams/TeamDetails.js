import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FlexContainer } from "../_styledComponents/flexContainer";
import {
  TeamIconWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardImage,
  CardFieldset,
  CardOptionsNote,
} from "../_styledComponents/teamIcon";

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

  return team ? (
    <FlexContainer>
      <TeamIconWrapper>
        <CardHeader>
          <CardHeading>{team.name}</CardHeading>
        </CardHeader>
        <CardBody>
          <CardImage imgUrl="https://a.espncdn.com/i/teamlogos/nba/500/bos.png" />
          <CardFieldset>
            <CardOptionsNote>
              <b>Full name:</b> {team.full_name}
            </CardOptionsNote>
            <CardOptionsNote>
              <b>Division:</b> {team.division}
            </CardOptionsNote>
            <CardOptionsNote>
              <b>Conference:</b> {team.conference}
            </CardOptionsNote>
            <CardOptionsNote>
              <b>Abbreviation:</b> {team.abbreviation}
            </CardOptionsNote>
            <CardOptionsNote>
              <b>City:</b> {team.city}
            </CardOptionsNote>
          </CardFieldset>
        </CardBody>
      </TeamIconWrapper>
    </FlexContainer>
  ) : (
    <div> no data </div>
  );
}

export default TeamDetails;
