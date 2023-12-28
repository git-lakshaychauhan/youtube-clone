import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Video from "./Video";
import { fetchfromAPI } from "../utils/fetchfromApi"; // Import the modified fetchWithRetries function

const SearchDetail = () => {
  const [videos, setVideose] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchfromAPI(`search?part=snippet&q=${searchTerm}`);
        setVideose(data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <Box P={2} sx={{ height: "90vh", overflowY: "auto", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        searched for: <span style={{ color: "red" }}>{searchTerm} Videos</span>
      </Typography>
      <Video videos={videos} />
    </Box>
  );
};

export default SearchDetail;
