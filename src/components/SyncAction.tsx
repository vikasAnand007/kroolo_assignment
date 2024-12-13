import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  ListItemText,
  Typography,
  Button,
} from "@mui/material";

import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const menuItems = [
  {
    name: "Github",
  },
  {
    name: "Gitlab",
  },
];

const SyncAction: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        sx={{ textTransform: "none" }}
        variant="outlined"
        size="small"
        endIcon={<KeyboardArrowDownOutlinedIcon />}
        onClick={handleClick}
      >
        Sync Repos
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {menuItems.map((item) => {
          return (
            <MenuItem
              sx={{ paddingY: 0.2, paddingX: 2 }}
              key={item.name}
              onClick={handleClose}
            >
              <ListItemText>
                <Typography sx={{ fontSize: "13px" }}>{item.name}</Typography>
              </ListItemText>
              <Button
                sx={{ textTransform: "none" }}
                variant="text"
                size="small"
              >
                Connect
              </Button>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default SyncAction;
