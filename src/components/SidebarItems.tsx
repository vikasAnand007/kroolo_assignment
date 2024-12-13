import * as React from "react";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import { Box, Divider, Typography } from "@mui/material";

export default function SidebarItems() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const menuItems = [
    {
      name: "Inbox",
      icon: InboxOutlinedIcon,
    },
    {
      name: "Direct Messages",
      icon: EmailOutlinedIcon,
    },
    {
      name: "My Tasks",
      icon: PlaylistAddCheckOutlinedIcon,
    },
    {
      name: "AI Agents",
      icon: AutoAwesomeOutlinedIcon,
    },
    {
      name: "Chat with Anything",
      icon: DescriptionOutlinedIcon,
    },
  ];
  const menuItems2 = [
    {
      name: "Goals",
      icon: AdsClickOutlinedIcon,
    },
    {
      name: "Docs",
      icon: FolderOpenOutlinedIcon,
    },
    {
      name: "Channels",
      icon: QuestionAnswerOutlinedIcon,
    },
    {
      name: "Teams",
      icon: GroupsOutlinedIcon,
    },
    {
      name: "Track Time",
      icon: WatchLaterOutlinedIcon,
    },
  ];

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {menuItems.map((item) => {
        return (
          <Box
            sx={{ display: "flex", gap: 2, paddingX: 2, paddingY: 0.7 }}
            key={item.name}
          >
            <item.icon sx={{ width: "19px" }} />
            <Typography sx={{ fontSize: "13px" }}>{item.name}</Typography>
          </Box>
        );
      })}
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingX: 2,
          paddingY: 0.7,
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <LayersOutlinedIcon sx={{ width: "19px" }} />
          <Typography sx={{ fontSize: "14px" }}>Projects</Typography>
        </Box>
        {open ? (
          <ExpandLess sx={{ width: "18px" }} />
        ) : (
          <ExpandMore sx={{ width: "18px" }} />
        )}
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Box sx={{ display: "flex", gap: 2, paddingLeft: 4 }}>
            <LayersOutlinedIcon sx={{ width: "19px", color: "#ff005e" }} />
            <Typography sx={{ fontSize: "14px" }}>Projects</Typography>
          </Box>
        </List>
      </Collapse>
      {menuItems2.map((item) => {
        return (
          <Box
            sx={{ display: "flex", gap: 2, paddingX: 2, paddingY: 0.7 }}
            key={item.name}
          >
            <item.icon sx={{ width: "19px" }} />
            <Typography sx={{ fontSize: "13px" }}>{item.name}</Typography>
          </Box>
        );
      })}
    </List>
  );
}
