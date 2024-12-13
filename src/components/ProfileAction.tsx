import React, { useState } from "react";
import { Avatar, Box, Divider, Menu, Typography } from "@mui/material";

import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";

const ProfileAction: React.FC = () => {
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
      <PersonAddAlt1OutlinedIcon
        onClick={handleClick}
        sx={{
          width: "20px",
          color: "#a2a4ad",
          cursor: "pointer",
        }}
      />
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Typography sx={{ paddingX: 2, paddingY: 1, fontSize: "13px" }}>
          Search by name or email
        </Typography>
        <Divider />
        <Box sx={{ display: "flex", paddingX: 2, paddingY: 1, gap: 2 }}>
          <Box>
            <Avatar alt="Profile pic" src="/avatar.jpeg" />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "13px" }}>Name</Typography>
            <Typography sx={{ fontSize: "10px", color: "grey" }}>
              email@email.com
            </Typography>
          </Box>
        </Box>
      </Menu>
    </div>
  );
};

export default ProfileAction;
