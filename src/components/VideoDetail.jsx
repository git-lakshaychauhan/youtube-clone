import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { Video } from "./";
import { fetchfromAPI } from "../utils/fetchfromApi";
import { CheckCircle } from "@mui/icons-material";

const VideoDetail = () => {
  const { id } = useParams();
  const [videodetail, setVideodetail] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchfromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideodetail(data.items[0])
    );
    fetchfromAPI(`search?part=snippet&relatedToVideo=${id}`).then((data) =>
      setVideos(data.items)
    );
  }, [id]);

  if (!videodetail?.snippet) return "loading...";
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videodetail;
  return (
    <Box minHeight="95vh">
      <Stack direction={{ sx: "column", md: "row" }}>
        <Box flex={4}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            {videodetail && (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                controls
              />
            )}
            <Typography color="#fff" p={2} fontWeight="Bold" variant="h5">
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: "12px", color: "gray" }} />
                </Typography>
              </Link>

              <Stack
                direction="row"
                gap="20px"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  variant="body1"
                  sx={{ opacity: "0.7", color: "#fff" }}
                >
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Video videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
