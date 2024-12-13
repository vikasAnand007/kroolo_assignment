import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const menuItems = [
  {
    name: "Edit task",
    icon: EditIcon,
  },
  {
    name: "Add subtask",
    icon: SubdirectoryArrowRightIcon,
  },
  {
    name: "Mark as milestone",
    icon: StarOutlineIcon,
  },
  {
    name: "Duplicate task",
    icon: ContentCopyIcon,
  },
  {
    name: "Move to sprint",
    icon: ArrowForwardIcon,
  },
  {
    name: "Move to other project",
    icon: FolderOpenIcon,
  },
  {
    name: "Convert to subtask",
    icon: SwapHorizIcon,
  },
];

const TableAction: React.FC = () => {
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
      <MoreHorizIcon
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
              <ListItemIcon>
                <item.icon sx={{ width: "18px" }} />
              </ListItemIcon>
              <ListItemText>
                <Typography sx={{ fontSize: "13px" }}>{item.name}</Typography>
              </ListItemText>
            </MenuItem>
          );
        })}
        <MenuItem
          onClick={handleClose}
          sx={{ color: "error.main", paddingY: 0.2, paddingX: 2 }}
        >
          <ListItemIcon>
            <DeleteIcon sx={{ color: "error.main", width: "18px" }} />
          </ListItemIcon>
          <ListItemText>
            <Typography color="error" sx={{ fontSize: "13px" }}>
              Delete task
            </Typography>
          </ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default TableAction;
