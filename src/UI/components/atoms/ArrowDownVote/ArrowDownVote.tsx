import { FC } from 'react'
import { IconButton } from "@mui/material";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";

export const ArrowDownVote: FC = () => {
  return (
   <>
    <IconButton>
      <ArrowCircleDownOutlinedIcon fontSize='large' />
    </IconButton>
   </>
  )
}