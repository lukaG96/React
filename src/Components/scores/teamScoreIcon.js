import React from "react";
import Moment from "moment";
import {
  TeamScoreIconWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardOptionsNote,
} from "../_styledComponents/teamScoreIcon";

function TeamScoreIcon({ score }) {
  Moment.locale("en");
  var dt = score.date;
  return (
    <TeamScoreIconWrapper>
      <CardHeader>
        <CardHeading>Date: {Moment(dt).format("d MMM")}</CardHeading>
      </CardHeader>
      <CardBody>
        <CardFieldset>
          <CardOptionsNote>
            {score.home_team.abbreviation} score: {score.home_team_score}
          </CardOptionsNote>
          <CardOptionsNote>
            {score.visitor_team.abbreviation} score: {score.visitor_team_score}
          </CardOptionsNote>
        </CardFieldset>
      </CardBody>
    </TeamScoreIconWrapper>
  );
}

export default TeamScoreIcon;
