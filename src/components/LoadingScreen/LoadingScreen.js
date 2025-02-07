import { Box } from "@mui/system";
import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #4A148C, #EA4C89)",
      }}
    >
      <div className="loader-container">
        <div className="loader"></div>
      </div>
      <div className="text">
        <strong>Developed by VASUDEV JAISWAL</strong>
        <br />
        <div>Loading...</div>
      </div>
    </Box>
  );
};

export default LoadingScreen;
