import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import useDocData from "../../../Hooks/useDocData";

const OurExperts = () => {
  const [ourExperts, setOurExperts] = useState([]);
  const mainData = useDocData();
  let experts = mainData[0];

  // Handle undefined problem in mapping data
  useEffect(() => {
    if (experts?.length > 1) {
      const serv = experts?.slice(0, 3); // Only show top 3 experts
      setOurExperts(serv);
    }
  }, [experts]);

  return (
    <Box
      sx={{
        bgcolor: "#f0f4f8", // Light, soothing background color suitable for mental health
        color: "primary.main",
        p: 2,
        mb: 2,
        textAlign: "center",
      }}
    >
      <Container maxWidth="xl">
        <Typography sx={{ mt: 2, mb: 2, fontWeight: 600 }} variant="h6">
          Meet Our Mental Health Experts
        </Typography>

        <Typography sx={{ mb: 8, fontWeight: 600 }} variant="h5">
          Compassionate care for your mental well-being
        </Typography>

        {experts?.length > 1 ? (
          <Grid container spacing={3}>
            {ourExperts?.map((expert, index) => (
              <Grid
                key={expert.doc_id}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{ mx: "auto" }}
              >
                <Card
                  sx={{
                    mx: "auto",
                    boxShadow: 10,
                    maxWidth: 345,
                    transition: "0.5s all ease-in-out",
                    ":hover": {
                      color: "#e91e63", // Color theme for hover effect
                      boxShadow: 1,
                    },
                    img: { transition: "0.5s all ease-in-out" },
                    ":hover img": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <CardActionArea>
                    <Avatar
                      alt="doctor image"
                      src={`/assets/images/doctors/doctor${index + 1}.png`}
                      sx={{
                        width: 256,
                        height: 256,
                        mx: "auto",
                      }}
                    />

                    <CardContent sx={{ display: "flex", mx: "auto", my: 2 }}>
                      <Typography gutterBottom variant="h5" component="div">
                        Specialist in {expert.specialize}
                      </Typography>
                    </CardContent>

                    <Typography gutterBottom variant="h6" component="div">
                      Dr. {expert.name}
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <LinearProgress color="secondary" />
        )}

        <Typography sx={{ mx: 2, p: 2, textAlign: "end" }}>
          <HashLink
            smooth
            to="/doctors#doctors"
            className="text-style"
            color="primary"
          >
            Meet All Mental Health Experts
          </HashLink>
        </Typography>
      </Container>
    </Box>
  );
};

export default OurExperts;
