import { FC, useEffect, useState } from "react";
import { useUser } from "src/context/AuthContext";
import { listPosts } from "src/graphql/queries";
import { API } from "aws-amplify";
import { ListPostsQuery, Post } from "src/API";
import { PostPreview } from "@ui/components/organism/PostPreview/PostPreview";
import { AccordionCategories } from "@ui/components/organism";

import { Container, Grid } from "@mui/material";

type THome = {
  post: Post;
}

export const HomePage: FC<THome> = () => {
  const user = useUser();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPostsApi = async (): Promise<Post[]> => {
      const allPosts = (await API.graphql({ query: listPosts })) as {
        data: ListPostsQuery;
        errors: any[];
      };
      if (allPosts.data) {
        setPosts(allPosts.data.listPosts?.items as Post[]);
        return allPosts.data.listPosts?.items as Post[];
      } else {
        throw new Error("Could not get posts");
      }
    };

    fetchPostsApi();
  }, []);

  console.log("User:", user);
  console.log("Post:", posts);

  return (
    <Container maxWidth="md">
      <Grid container spacing={1}>
        <Grid item md={8}>
          {posts.map((post) => (
            <PostPreview key={post.id} post={post} />
          ))}          
        </Grid>
        <Grid item md={4}>
          <AccordionCategories />
        </Grid>
      </Grid>
    </Container>
  );
};
