import { FC } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Paper  } from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import theme from "@theme/theme";

const TextCategories = styled(Typography)({
  fontSize: "10px",
  fontWeight: 700,
  fontFamily: "Roboto",
  letterSpacing: ".5px",
  lineHeight: "12px",
  textTransform: "uppercase",
  color: theme.palette.common.black
});

const CustomAccordion = styled(Accordion)({
  backgroundColor: "#fff",
  boxShadow: "none",
});

export const AccordionCategories: FC = () => {
  return (
    <>
      <Paper elevation={3} sx={{ backgroundColor: "#fff", border: "1px solid #f2f2f2" }}>
        <CustomAccordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <TextCategories>popular communities</TextCategories>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </CustomAccordion>
        <CustomAccordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <TextCategories>videogames</TextCategories>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </CustomAccordion>
        <CustomAccordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <TextCategories>sports</TextCategories>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </CustomAccordion>
      </Paper>
    </>
  );
}
