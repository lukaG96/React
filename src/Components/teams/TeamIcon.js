import React from "react";
import Button from "../_styledComponents/buttons";
import { Link } from "react-router-dom";
import {
  TeamIconWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardImage,
  CardFieldset,
  CardOptionsNote,
} from "../_styledComponents/teamIcon";

function TeamIcon({ team, fullData, showBtn }) {
  return (
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

          {fullData ? (
            <>
              <CardOptionsNote>
                <b>Conference:</b> {team.conference}
              </CardOptionsNote>

              <CardOptionsNote>
                <b>Abbreviation:</b> {team.abbreviation}
              </CardOptionsNote>

              <CardOptionsNote>
                <b>City:</b> {team.city}
              </CardOptionsNote>
            </>
          ) : (
            <></>
          )}
        </CardFieldset>
        {showBtn ? (
          <>
            <Link to={"/details/" + team.id} style={{ textDecoration: "none" }}>
              <Button noBorder block size="lg" btnColor="danger">
                Details
              </Button>
            </Link>
          </>
        ) : (
          <></>
        )}
      </CardBody>
    </TeamIconWrapper>
  );
}

export default TeamIcon;
