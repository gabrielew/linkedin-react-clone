import React from "react";

import TrendingPanel from "./TrendingPanel";

import { Container } from "./styles";
import { LoadingTrendingPanel } from "components/Shimmer";

const RightColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="right-column">
      {isLoading ? (
        <LoadingTrendingPanel />
      ) : (
        <>
          <TrendingPanel title="Linkedin News" type="news" />
          <TrendingPanel title="Today's trending courses" type="trending" />
        </>
      )}
    </Container>
  );
};

export default RightColumn;
