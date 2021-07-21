import React from "react";
import {
  PostContainer,
  PostHeader,
  H1,
  Span,
  ButtonsContainer,
} from "../elements";
import { Button, FeatureImg } from "./index";

export const Post = ({ children, title, date, tags, featureImage }) => {
  return (
    <div>
      <PostHeader>
        <H1>{title}</H1>
        {tags && (
          <ButtonsContainer>
            {tags.map((tag) => (
              <Button key={tag} href={`/tags/${tag}`}>
                {tag}
              </Button>
            ))}
          </ButtonsContainer>
        )}
        <Span>{date}</Span>
      </PostHeader>
      <FeatureImg featureImage={featureImage} />
      <PostContainer>{children}</PostContainer>
    </div>
  );
};
