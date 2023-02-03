import React from "react";
import { ArrowUpVote, ArrowDownVote, CounterVotes } from "@ui/components/atoms";
import { Grid } from "@mui/material";

export const VotePost: React.FC = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item>
          <ArrowUpVote />
          <CounterVotes />
          <ArrowDownVote />
        </Grid>
      </Grid>
    </>
  );
};
