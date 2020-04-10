import React from "react";
import Button from "../_styledComponents/buttons";
import {
  TeamIconWrapper,
  CardHeader,
  CardHeading,
  CardBody,
} from "../_styledComponents/teamIcon";

function TeamIcon({ team }) {
  return (
    <TeamIconWrapper>
      <CardHeader>
        <CardHeading>{team.name}</CardHeading>
      </CardHeader>
      <CardBody>
        <a href={`/details/${team.id}`} className="pet">
          Id
        </a>
        <Button noBorder block size="lg" btnColor="danger">
          Details
        </Button>
      </CardBody>
    </TeamIconWrapper>
  );
}

export default TeamIcon;
