import { FC } from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import theme from "@theme/theme";

const TextCounterVotes = styled(Typography)({
  fontSize: "14px",
  fontWeight: 700,
  fontFamily: "Roboto",
  letterSpacing: ".5px",
  lineHeight: "12px",
  textTransform: "uppercase",
  color: theme.palette.common.black,
});

export const CounterVotes: FC = () => {
  return (
    <>
      <TextCounterVotes
        sx={{display: "flex", justifyContent: "center"}}
      >
        365
      </TextCounterVotes>
    </>
  );
};
