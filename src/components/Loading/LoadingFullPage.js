import { CircularProgress } from "@material-ui/core";
import React from "react";

const LoadingFullPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        minHeight: "80vh",
        position: "absolute",
        width: "100vw",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1500,
      }}
    >
      <CircularProgress color="secondary" size={60} />
    </div>
  );
};

export default LoadingFullPage;
