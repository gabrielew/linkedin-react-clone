import React from "react";

import { Panel } from "components";

import { Container } from "./styles";

interface Props {
  title: string;
  type: "news" | "trending";
}

const TrendingPanel: React.FC<Props> = ({ title, type }) => {
  return (
    <Container>
      <Panel>
        <span className="title">{title}</span>
        {type === "news" ? (
          <ul>
            <li>
              <span className="bullet" />
              <span className="news">
                <span className="head">
                  Corona virus is stabilizing in Brazil
                </span>
                <span className="subtext">1 d ago • 316 readers</span>
              </span>
            </li>
            <li>
              <span className="bullet" />
              <span className="news">
                <span className="head">We're hiring at Rocketseat</span>
                <span className="subtext">2 d ago • 50 readers</span>
              </span>
            </li>
            <li>
              <span className="bullet" />
              <span className="news">
                <span className="head">
                  Deaths by corona virus fall 14% in Brazil
                </span>
                <span className="subtext">3 d ago • 210 readers</span>
              </span>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <span className="bullet" />
              <span className="news">
                <span className="head">Bootcamp at Rocketseat</span>
                <span className="subtext">1 d ago • 316 readers</span>
              </span>
            </li>
            <li>
              <span className="bullet" />
              <span className="news">
                <span className="head">NLW-1 at Rocketseat</span>
                <span className="subtext">1 d ago • 50 readers</span>
              </span>
            </li>
            <li>
              <span className="bullet" />
              <span className="news">
                <span className="head">NLW-2 at Rocketseat</span>
                <span className="subtext">1 d ago • 210 readers</span>
              </span>
            </li>
          </ul>
        )}
      </Panel>
    </Container>
  );
};

export default TrendingPanel;
