import React from 'react';
import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import theme from "@theme/theme";
import { TCardPostType } from './types';



const CardPostStyled = styled(Card)({
	backgroundColor: theme.palette.background.default,
  marginBottom: '10px'
});


export const CardPost: React.FC<TCardPostType> = ({
  children,
  elevation,
}: TCardPostType) => {
  return <CardPostStyled elevation={elevation}>{children}</CardPostStyled>;
};

