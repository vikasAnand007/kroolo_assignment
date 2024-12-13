import {
  Box,
  Drawer,
  Avatar,
  Divider,
  Typography,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeMobileSidebar, openMobileSidebar } from "../store/slice";
import { RootState } from "../store/store";
import SidebarItems from "./SidebarItems";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Header = () => {
  const { isMobileSidebarOpen } = useSelector((store: RootState) => store.site);
  const dispatch = useDispatch();

  const toggleSidebar = (bool: boolean) => {
    dispatch(bool ? openMobileSidebar() : closeMobileSidebar());
  };
  return (
    <>
      <Box sx={{ padding: "10px 20px" }}>
        <Box sx={{ display: { xs: "block", lg: "none" } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "150px" }}>
              <img style={{ width: "100%" }} src="/logo-dark.svg" />
            </Box>
            <Box sx={{ display: "flex", gap: 4 }}>
              <Avatar alt="Profile pic" src="/avatar.jpeg" />
              <img
                src="https://app.kroolo.com/static/media/responsivesidebardarkicon.0bed40b41d9527f6c15f42152e4f159c.svg"
                style={{ cursor: "pointer" }}
                onClick={() => toggleSidebar(!isMobileSidebarOpen)}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: { xs: "none", lg: "block" } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{}}>
              <Typography sx={{ fontSize: "11px", marginBottom: 0.5 }}>
                Workspace
              </Typography>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <img style={{ width: "20px" }} src="/home.svg" />
                <Typography sx={{ fontSize: "13px" }}>
                  Demo Workspace
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 4 }}>
              <Button
                endIcon={<ExpandMore />}
                sx={{ textTransform: "none" }}
                variant="outlined"
                size="small"
              >
                Full Name
              </Button>
              <Avatar alt="Profile pic" src="/avatar.jpeg" />
            </Box>
          </Box>
        </Box>

        <Drawer
          anchor="right"
          open={isMobileSidebarOpen}
          onClose={() => toggleSidebar(false)}
        >
          <SidebarItems />
        </Drawer>
      </Box>
      <Divider sx={{ backgroundColor: "#eaebf0" }} />
    </>
  );
};

export default Header;
