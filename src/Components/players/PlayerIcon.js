import React from "react";
import {
  PlayerIconWrapper,
  // CardHeader,
  // CardHeading,
  CardBody,
  CardImage,
  CardFieldset,
  CardOptionsNote,
} from "../_styledComponents/playerIcon";
function PlayerIcon({ player }) {
  return (
    <PlayerIconWrapper>
      {/* <CardHeader>
        <CardHeading>{player.name}</CardHeading>
      </CardHeader> */}
      <CardBody>
        <CardImage imgUrl="https://a.espncdn.com/i/headshots/nba/players/full/6583.png" />
        <CardFieldset>
          <CardOptionsNote>
            <b>First name: </b> {player.first_name}
          </CardOptionsNote>
          <CardOptionsNote>
            <b>Last name: </b> {player.last_name}
          </CardOptionsNote>
          <CardOptionsNote>
            <b>Team : </b> {player.team.full_name}
          </CardOptionsNote>
        </CardFieldset>
      </CardBody>
    </PlayerIconWrapper>
  );
}

export default PlayerIcon;
