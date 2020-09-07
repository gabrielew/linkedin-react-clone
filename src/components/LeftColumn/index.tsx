import React from "react";

import ProfilePanel from "./ProfilePanel";
import HashtagPanel from "./HashtagPanel";
import { LoadingProfilePanel } from "components/Shimmer";

import { Container } from "./styles";

const LeftColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="left-column">
      {isLoading ? (
        <LoadingProfilePanel />
      ) : (
        <>
          <ProfilePanel />
          <HashtagPanel />
        </>
      )}
    </Container>
  );
};

export default LeftColumn;
