import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
const Navsearch = () => {
  const Navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      Navigate(`/search/${searchTerm}`);
    }
    setSearchTerm("");
  };
  const inputEl = useRef(null);
  useEffect(function () {
    if (document.activeElement === inputEl.current) return;

    function callback(e) {
      if (e.code === "Enter") {
        inputEl.current.focus();
        // setSearchTerm("");
      }
    }

    document.addEventListener("keydown", callback);
  }, []);

  return (
    <Paper
      component="form"
      onSubmit={handlesubmit}
      sx={{ borderRadius: 20, border: "1px solid gray", pl: 2 }}
    >
      <input
        className="search-bar"
        type="text"
        placeholder="search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        ref={inputEl}
      />
      <IconButton sx={{ color: "red", p: "10px" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default Navsearch;
