import React from "react";

import { Panel } from "components";

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from "./styles";

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="https://i.imgur.com/81RtXfT.jpg" alt="Rocketseat" />
          <Column>
            <h3>Rocketseat</h3>
            <h4>Instituição de ensino</h4>
            <time>1 sem</time>
          </Column>
        </Row>

        <PostImage
          src="https://blog.rocketseat.com.br/content/images/2019/05/Painel.png"
          alt="Rocketseat Blog"
        />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">49</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Like</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comment</span>
          </button>
          <button>
            <ShareIcon />
            <span>Share</span>
          </button>
          <button>
            <SendIcon />
            <span>Send</span>
          </button>
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedPost;
