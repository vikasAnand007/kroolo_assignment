import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AlignVerticalBottomOutlinedIcon from "@mui/icons-material/AlignVerticalBottomOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import UnfoldMoreOutlinedIcon from "@mui/icons-material/UnfoldMoreOutlined";
import TableAction from "./TableAction";
import PriorityAction from "./PriorityAction";
import TypeAction from "./TypeAction";
import DateAction from "./DateAction";
import ProfileAction from "./ProfileAction";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import SyncAction from "./SyncAction";

const tablist = [
  {
    name: "Dashboard",
    Icon: GridViewOutlinedIcon,
  },
  {
    name: "List",
    Icon: ListOutlinedIcon,
  },
  {
    name: "Board",
    Icon: AlignVerticalBottomOutlinedIcon,
  },
  {
    name: "Calender",
    Icon: CalendarMonthOutlinedIcon,
  },
  {
    name: "Timeline",
    Icon: TextSnippetOutlinedIcon,
  },
  {
    name: "Workload",
    Icon: WatchLaterOutlinedIcon,
  },
  {
    name: "Docs",
    Icon: InsertDriveFileOutlinedIcon,
  },
  {
    name: "Chat",
    Icon: QuestionAnswerOutlinedIcon,
  },
  {
    name: "Embed",
    Icon: CodeOutlinedIcon,
  },
  {
    name: "Files",
    Icon: FolderOpenOutlinedIcon,
  },
  {
    name: "Risks",
    Icon: WarningAmberOutlinedIcon,
  },
];

const tableRows = [
  {
    id: 1,
    name: "Task 1",
    status: "Open",
    priority: false,
  },
  {
    id: 2,
    name: "Task 2",
    status: "Open",
    priority: false,
  },
  {
    id: 3,
    name: "Task 3",
    status: "Open",
    priority: false,
  },
];

const MainArea: React.FC = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "18px",
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #eaebf0",
              borderRadius: "5px",
              padding: "5px",
            }}
          >
            <img style={{ width: "30px" }} src="/stack.svg" />
          </Box>
          <Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography>Demo Project</Typography>
              <img src="/downarrow.svg" />
              <MoreHorizIcon sx={{ color: "#a2a5ae" }} />
            </Box>
            <Box>
              <InsertDriveFileOutlinedIcon sx={{ color: "#a2a5ae" }} />
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          <Button
            sx={{ textTransform: "none" }}
            variant="outlined"
            size="small"
            startIcon={<AutoAwesomeOutlinedIcon />}
          >
            Ask AI
          </Button>
          <Button
            sx={{ textTransform: "none" }}
            variant="outlined"
            size="small"
            startIcon={<BoltOutlinedIcon />}
          >
            Automation
          </Button>
          <Button
            sx={{ textTransform: "none" }}
            variant="contained"
            size="small"
            startIcon={<ShareOutlinedIcon />}
          >
            Share
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingX: 2,
              paddingY: 1,
              gap: 2,
            }}
          >
            <Box>
              <Avatar
                alt="Profile pic"
                src="/avatar.jpeg"
                sx={{ width: "25px", height: "25px" }}
              />
            </Box>
            <Box>
              <Typography sx={{ fontSize: "13px" }}>Full Name</Typography>
              <Typography sx={{ fontSize: "10px", color: "grey" }}>
                Project Owner
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          paddingX: "18px",
          marginBottom: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 2, overflowX: "auto" }}>
            {tablist.map((elem) => {
              return (
                <Box
                  key={elem.name}
                  sx={{ display: "flex", gap: 1, alignItems: "center" }}
                >
                  <elem.Icon sx={{ color: "#6a6e7c", width: "20px" }} />
                  <Typography
                    sx={{ color: "#6a6e7c", fontSize: "13px", fontWeight: 500 }}
                  >
                    {elem.name}
                  </Typography>
                </Box>
              );
            })}
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            {/* <Button
              sx={{ textTransform: "none" }}
              variant="outlined"
              size="small"
              endIcon={<KeyboardArrowDownOutlinedIcon />}
            >
              Sync Repos
            </Button> */}
            <SyncAction />
            <Button
              sx={{ textTransform: "none" }}
              variant="outlined"
              size="small"
              startIcon={<AddOutlinedIcon />}
            >
              Create Sprint
            </Button>
          </Box>
        </Box>
        <Divider sx={{ backgroundColor: "#eaebf0", marginTop: 1 }} />
      </Box>
      <Box sx={{ marginBottom: 1 }}>
        <Box
          sx={{
            paddingX: "18px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <Button
              sx={{ textTransform: "none" }}
              variant="outlined"
              size="small"
              startIcon={<TextSnippetOutlinedIcon />}
            >
              Group By: Status
            </Button>
            <Button
              sx={{ textTransform: "none" }}
              variant="outlined"
              size="small"
              startIcon={<FilterListOutlinedIcon />}
            >
              Filters
            </Button>
            <Button
              sx={{ textTransform: "none" }}
              variant="outlined"
              size="small"
              startIcon={<SearchOutlinedIcon />}
            >
              Search task
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: 5 }}>
            <Box>
              <Typography
                sx={{ color: "#6a6e7c", fontSize: "13px", fontWeight: 500 }}
              >
                Project Completion
              </Typography>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Box
                  sx={{
                    width: "80px",
                    height: "8px",
                    backgroundColor: "rgb(208, 213, 221)",
                    borderRadius: "4px",
                  }}
                ></Box>{" "}
                <Typography
                  sx={{ color: "#6a6e7c", fontSize: "13px", fontWeight: 500 }}
                >
                  0%
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{ color: "#6a6e7c", fontSize: "13px", fontWeight: 500 }}
              >
                Project Dates
              </Typography>
              <Typography
                sx={{ color: "#6a6e7c", fontSize: "13px", fontWeight: 500 }}
              >
                No date - No date
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ backgroundColor: "#eaebf0", marginTop: 1 }} />
      </Box>
      <Box sx={{ marginBottom: 1 }}>
        <Box
          sx={{
            paddingX: "30px",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <ArrowDropDownOutlinedIcon />
          <Box
            sx={{
              backgroundColor: "#ffee9d",
              padding: "5px 8px",
              borderRadius: "5px",
              fontSize: "13px",
            }}
          >
            Open
          </Box>
          <Box
            sx={{
              backgroundColor: "#f2f4f7",
              padding: "2px 5px",
              borderRadius: "10px",
              fontSize: "15px",
            }}
          >
            3
          </Box>
        </Box>
        <Divider sx={{ backgroundColor: "#eaebf0", marginTop: 1 }} />
      </Box>
      <Box sx={{ marginBottom: 1 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ padding: 0.5, width: "35%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Task name{" "}
                    <UnfoldMoreOutlinedIcon
                      sx={{ width: "15px", color: "#c7ccd2" }}
                    />
                  </Box>
                </TableCell>
                <TableCell sx={{ padding: 0.5 }} align="center">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Status{" "}
                    <UnfoldMoreOutlinedIcon
                      sx={{ width: "15px", color: "#c7ccd2" }}
                    />
                  </Box>
                </TableCell>
                <TableCell sx={{ padding: 0.5 }} align="center">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Priority{" "}
                    <UnfoldMoreOutlinedIcon
                      sx={{ width: "15px", color: "#c7ccd2" }}
                    />
                  </Box>
                </TableCell>
                <TableCell sx={{ padding: 0.5 }} align="center">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Due Date{" "}
                    <UnfoldMoreOutlinedIcon
                      sx={{ width: "15px", color: "#c7ccd2" }}
                    />
                  </Box>
                </TableCell>
                <TableCell sx={{ padding: 0.5 }} align="center">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Assignee{" "}
                    <UnfoldMoreOutlinedIcon
                      sx={{ width: "15px", color: "#c7ccd2" }}
                    />
                  </Box>
                </TableCell>
                <TableCell sx={{ padding: 0.5 }} align="center">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Type{" "}
                    <UnfoldMoreOutlinedIcon
                      sx={{ width: "15px", color: "#c7ccd2" }}
                    />
                  </Box>
                </TableCell>
                <TableCell sx={{ padding: 0.5, width: "25%" }} align="center">
                  <AddOutlinedIcon />
                </TableCell>
              </TableRow>
            </TableHead>
            <Box sx={{ textAlign: "center" }}>
              <Button
                sx={{ textTransform: "none" }}
                variant="text"
                size="small"
                startIcon={<AddOutlinedIcon />}
              >
                Add Task
              </Button>
            </Box>
            <TableBody>
              {tableRows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    padding: 0,
                  }}
                >
                  <TableCell
                    sx={{ padding: 0.5 }}
                    align="center"
                    component="th"
                    scope="row"
                  >
                    <input type="radio" /> {row.name}
                  </TableCell>
                  <TableCell sx={{ padding: 0.5 }} align="center">
                    <Chip
                      size="small"
                      label={row.status}
                      sx={{ backgroundColor: "#ffee9d" }}
                    />
                  </TableCell>
                  <TableCell sx={{ padding: 0.5 }} align="center">
                    <PriorityAction />
                  </TableCell>
                  <TableCell sx={{ padding: 0.5 }} align="center">
                    <DateAction />
                  </TableCell>
                  <TableCell sx={{ padding: 0.5 }} align="center">
                    <ProfileAction />
                  </TableCell>
                  <TableCell sx={{ padding: 0.5 }} align="center">
                    <TypeAction />
                  </TableCell>
                  <TableCell sx={{ padding: 0.5 }} align="center">
                    <TableAction />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default MainArea;
