import { Box, Container, Grid, Typography } from "@mui/material";
import faqBanner from '../../../assets/faqs-banner.jpg';
import CustomizedAccordions from "../../Accordion/Accordion";

export default function FAQs() {
  const faqs = [
    { question: 'Why choose our medical for your family?', answer: 'Lorem ipsum...' },
    { question: 'Why we are different from others?', answer: 'Lorem ipsum...' },
    { question: 'Trusted & experienced senior care & love', answer: 'Lorem ipsum...' },
    { question: 'How to get appointment for emergency cases?', answer: 'Lorem ipsum...' }
  ];

  return (
    <Box py={4}>
      <Container maxWidth="xl">
        <Typography color="primary.main" fontWeight={600} textAlign="center">
          Get Your Answer
        </Typography>
        <Typography textAlign="center" variant="h2" mb={2}>
          Frequently Asked Questions
        </Typography>

        {/* Explicit row on desktop, stack on mobile */}
        <Grid 
          container 
          spacing={5} 
          alignItems="center"
          direction={{ xs: "column", md: "row" }}
        >
          {/* Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={faqBanner}
              width="100%"
              height="auto"
              sx={{ borderRadius: 2 }}
            />
          </Grid>

          {/* Accordion */}
          <Grid item xs={12} md={6}>
            <Box maxWidth={450} mx="auto">
              <CustomizedAccordions data={faqs} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
