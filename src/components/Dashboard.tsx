import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MainArea from "./MainArea";

const Dashboard = () => {
  return (
    <Box>
      <Box>
        <Header />
      </Box>
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <Box sx={{ flex: "80%", height: "100%" }}>
          <MainArea />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
