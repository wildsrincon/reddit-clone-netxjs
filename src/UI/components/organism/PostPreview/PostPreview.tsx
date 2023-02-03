import { FC } from 'react'
import { Grid } from '@mui/material';
import { Post } from 'src/API';

// Components
import { CardPost } from '@ui/components/atoms'
import { VotePost } from '@ui/components/molecules/VotePost';
import { ContentPost, HeaderPost } from '@ui/components/molecules';

type TPost = {
  post: Post
}

interface Props {
  post: Post;
};

export const PostPreview: FC<TPost> = ({post}: Props) => {
  return (
    <>      
      <CardPost elevation={8}>
        <Grid container>
          <Grid item sx={{ backgroundColor: "#d7dae0" }}>
            <VotePost />
          </Grid>
          <Grid item>
            <HeaderPost post={post} />
            <ContentPost post={post} />
          </Grid>
        </Grid>
      </CardPost>
    </>
  );
};