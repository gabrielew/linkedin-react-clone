import React from "react";

import { Panel } from "components";

import { Container } from "./styles";

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img src="/profile.svg" alt="Avatar" className="profile-picture" />
        <h1>Gabriel Alcântara</h1>
        <h2>Software Development</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Who viewed your profile</span>
          <span className="value">4.128</span>
        </div>
        <div className="key-value">
          <span className="key">Views of your post</span>
          <span className="value">897</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
