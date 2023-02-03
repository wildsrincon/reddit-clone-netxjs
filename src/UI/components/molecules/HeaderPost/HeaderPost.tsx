import { FC } from 'react';
import { Typography } from '@mui/material';
import { Post } from "src/API";

type THeaderPost = {
  post: Post;
};

interface Props {
  post?: Post;
}

export const HeaderPost: FC<THeaderPost> = ({post}: Props) => {
  return (
    <>
      <Typography
        variant="subtitle1"
        color="black"
        sx={{ marginLeft: 2, marginTop: 1 }}
      >
        Post By <b>{post?.owner}</b> at <b>{post?.createdAt}</b>
      </Typography>
    </>
  );
};

