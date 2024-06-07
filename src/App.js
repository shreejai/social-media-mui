import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { Box, Container, Stack } from "@mui/material";

function App() {
  
  return (
    <Box>
      {/* Navbar */}
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack> 
    </Box>
  );
}

export default App;
