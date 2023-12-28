import { Stack, Box } from "@mui/material";
import React from "react";
import { Videocard, Channelcard } from "./";

const Video = ({ videos, direction }) => {
  if (!videos?.length) return "loading..."; // Corrected typo from Video to videos
  console.log(videos);
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      gap={1}
    >
      {videos.map((lol, index) => (
        <Box key={index}>
          {lol.id.channelId && <Channelcard channelcard={lol} />}
          {lol.id.videoId && <Videocard videocard={lol} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Video;
