import { FC } from "react";
import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import theme from "@theme/theme";
import { TCardAuthProps } from "./types";

const CustomCard = styled(Card)({
  [theme.breakpoints.down("md")]: {
    width: "80vw",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "60vw",
  },
  [theme.breakpoints.up("lg")]: {
    width: "40vw",
  },
});

export const CardAuth: FC<TCardAuthProps> = ({
  children,
  elevation,
}: TCardAuthProps) => {
  return (
    <CustomCard
      elevation={elevation}
      sx={{
        p: 2,
      }}
    >
      {children}
    </CustomCard>
  );
};
