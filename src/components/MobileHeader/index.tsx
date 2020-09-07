import React from "react";

import { SearchInput } from "components";
import { Container, ProfileCircle, MessageIcon } from "./styles";

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="/profile.svg" />
      <SearchInput />
      <MessageIcon />
    </Container>
  );
};

export default MobileHeader;
