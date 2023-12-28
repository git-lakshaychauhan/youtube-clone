import React from "react";
import { Box, CardMedia, CardContent, Typography } from "@mui/material";
import { demoProfilePicture } from "../utils/constants";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

const Channelcard = ({ channelcard, marginTop }) => (
  <Box
    sx={{
      borderRadius: "20px",
      width: { xs: "356px", md: "320px" },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "326px",
      margin: "auto",
      marginTop,
    }}
  >
    <Link to={`/channel/${channelcard?.id?.channelId}`}>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <CardMedia
          image={
            channelcard?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt="image is loading"
          sx={{
            height: "180px",
            width: "180px",
            borderRadius: "50%",
            mb: 2,
            border: "1px solid #e3e3e3",
          }}
        />
        <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
          {channelcard?.snippet?.title}
          <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
        {channelcard?.statistics?.subscriberCount && (
          <Typography color="white" variant="body1">
            {parseInt(
              channelcard?.statistics?.subscriberCount.toLocaleString()
            )}{" "}
            Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default Channelcard;
