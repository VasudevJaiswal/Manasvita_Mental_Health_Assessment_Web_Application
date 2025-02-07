import { Box, Container, Typography, Link } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "70vh",
        py: 4,
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          sx={{
            color: "primary.main",
            mx: 2,
            py: 2,
            textAlign: "center",
            fontWeight: "bold",
          }}
          variant="h4"
        >
          Welcome to Manasvita
        </Typography>

        <Typography
          sx={{ mx: 2, py: 2, textAlign: "center", color: "text.secondary" }}
          variant="h6"
        >
          Your Trusted Mental Health Assessment Platform
        </Typography>

        <Typography
          sx={{ mx: 2, py: 2, mb: 4, textAlign: "justify", color: "text.primary" }}
          variant="body1"
        >
          At Manasvita, we strive to create a platform that promotes mental
          well-being and offers reliable mental health assessments. With
          expert-driven methodologies, we ensure that our users receive a fair
          and unbiased evaluation of their mental health.
          <br />
          <br />
          Mental health is an essential aspect of overall well-being, yet it
          remains underprioritized. Our mission is to bridge this gap by
          empowering individuals to understand and improve their mental health.
          <br />
          <br />
          Be sure to share your experience with <strong>Manasvita</strong> and
          leave feedback on the assessments or features you’ve used. Your
          suggestions and feedback are invaluable to us as we continue to
          enhance our platform.
          <br />
          <br />
          Connect with us on LinkedIn:{" "}
          <Link
            href="https://linkedin.com/in/VasudevJaiswal"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            @VasudevJaiswal
          </Link>
          .
          <br />
          <br />
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
