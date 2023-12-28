import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchfromAPI } from "../utils/fetchfromApi";
import { Videocard, Channelcard } from "./";

const ChannelDetail = () => {
  const [channeldetail, setChanneldetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  console.log(channeldetail, videos);

  useEffect(() => {
    fetchfromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      console.log(data);

      setChanneldetail(data?.items[0]);
    });

    // Fetch videos
    fetchfromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(120deg, rgba(255,0,252,1) 0%, rgba(171,18,253,1) 42%, rgba(52,0,255,1) 100%)",
            zIndex: "10",
            height: "300px",
          }}
        />

        {channeldetail && (
          <Channelcard channelcard={channeldetail} marginTop="-96px" />
        )}
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        p={2}
      >
        {videos &&
          videos.map((video) => (
            <Box
              key={video.id}
              width="100%"
              maxWidth="400px"
              flexBasis="20%"
              p={1}
            >
              <Videocard videocard={video} />
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default ChannelDetail;
