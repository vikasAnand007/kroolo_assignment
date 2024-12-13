import React, { useState } from "react";
import { Menu, MenuItem, ListItemText, Typography, Box } from "@mui/material";

import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";

const menuItems = [
  {
    name: "Task",
    color: "yellow",
  },
  {
    name: "Personal",
    color: "pink",
  },
  {
    name: "Feature",
    color: "green",
  },
  {
    name: "Epic",
    color: "purple",
  },
  {
    name: "Bug",
    color: "red",
  },
  {
    name: "Enhancement",
    color: "aqua",
  },
];

const TypeAction: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* @ts-expect-error some */}
      <AdjustOutlinedIcon
        onClick={handleClick}
        sx={{
          width: "20px",
          color: "#a2a4ad",
          cursor: "pointer",
        }}
      />
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {menuItems.map((item) => {
          return (
            <MenuItem
              sx={{ paddingY: 0.2, paddingX: 2 }}
              key={item.name}
              onClick={handleClose}
            >
              <Box
                sx={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: item.color,
                  marginRight: 2,
                  borderRadius: "50%",
                }}
              ></Box>
              <ListItemText>
                <Typography sx={{ fontSize: "13px" }}>{item.name}</Typography>
              </ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default TypeAction;
