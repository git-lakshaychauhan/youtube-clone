import React, { useEffect } from "react";
import { useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Video from "./Video";
import { fetchfromAPI } from "../utils/fetchfromApi";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideose] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchfromAPI(
          `search?part=snippet&q=${selectedCategory}`
        );
        setVideose(data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
        gap: "1rem",
        p: 0,
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          width: "10rem",
          // borderRight: "1px solid #3d3d3d",
          p: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright
        </Typography>
      </Box>
      <Box P={2} sx={{ height: "90vh", overflowY: "auto", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "red" }}>Videos</span>
        </Typography>
        <Video videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
