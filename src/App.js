import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  VideoDetail,
  ChannelDetail,
  Feed,
  SearchDetail,
} from "./components";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Box sx={{ backgroundColor: "#000" }} p={"0.4rem"}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchDetail />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
};

export default App;
