import React, { useState } from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

function Sidebar({ selectedCategory, setSelectedCategory }) {
  function handleCategoryClick(categoryName) {
    setSelectedCategory(categoryName);
  }

  return (
    <Stack
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { xs: "row", md: "column" },
      }}
      alignItems="center"
    >
      {categories.map((category) => (
        <button key={category.name} className="category-btn">
          <div
            onClick={() => handleCategoryClick(category.name)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
              color: "white",
              backgroundColor:
                selectedCategory === category.name ? "red" : "inherit",
              borderRadius: "12px",
              paddingLeft: "0.8rem",
              paddingRight: "0.8rem",
              paddingTop: "5px",
              paddingBottom: "5px",
              opacity: selectedCategory === category.name ? "1" : "0.8",
            }}
          >
            {category.icon}
            <span>{category.name}</span>
          </div>
        </button>
      ))}
    </Stack>
  );
}

export default Sidebar;
