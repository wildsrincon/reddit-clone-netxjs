import { FC } from 'react'
import { IconButton } from "@mui/material";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";

export const ArrowUpVote: FC = () => {
  return (
    <>
      <IconButton>
        <ArrowCircleUpOutlinedIcon fontSize="large" />
      </IconButton>
    </>
  );
}