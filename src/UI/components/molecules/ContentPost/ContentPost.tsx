import { FC } from "react";
import { Typography } from "@mui/material";
import { Post } from "src/API";

type TContentPost = {
  post: Post;
};

interface Props {
  post?: Post;
}

export const ContentPost: FC<TContentPost> = ({ post }: Props) => {
  return (
    <>
      <Typography variant="h4" color='black' sx={{ marginLeft: 2 }}>
        {post?.title}
      </Typography>
    </>
  );
};
