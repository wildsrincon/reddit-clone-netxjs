import { FC } from 'react';
import {
  Container
} from "@mui/material";
import { TContainerProps } from './types';

export const MainContainer: FC<TContainerProps> = ({
  children,
}: TContainerProps) => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        px: 4,
        py: 4,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Container>
  );
};

