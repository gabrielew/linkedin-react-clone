import React from "react";

import { Panel } from "components";

import {
  Container,
  WriteIcon,
  CameraIcon,
  VideoCameraIcon,
  DocumentIcon,
  ArticleIcon,
} from "./styles";

const FeedShare: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="write">
          <WriteIcon />
          <span>Start a post</span>
        </div>
        <div className="attachment">
          <button>
            <CameraIcon />
            Photo
          </button>
          <button>
            <VideoCameraIcon />
            Vídeo
          </button>
          <button>
            <DocumentIcon />
            Document
          </button>
          <button>
            <ArticleIcon />
            Write an article
          </button>
        </div>
      </Container>
    </Panel>
  );
};

export default FeedShare;
