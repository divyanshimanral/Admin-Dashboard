import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarCharts";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="BAR" subtitle="Simple Bar Charts" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
