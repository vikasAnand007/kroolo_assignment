import SidebarItems from "./SidebarItems";
import { Box } from "@mui/material";

const Sidebar = () => {
  return (
    <>
      <Box
        sx={{
          borderRight: "1px solid #eaebf0",
          flex: "10%",
          height: "100%",
          display: { xs: "none", lg: "block" },
        }}
      >
        <SidebarItems />
      </Box>
    </>
  );
};

export default Sidebar;
