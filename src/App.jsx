import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
// import { Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Topbar from "./screens/global/Topbar";
import Dashboard from "./screens/dashboard/index";
import MainSidebar from "./screens/global/Sidebar";
import Team from "./screens/team/index";
import Contact from "./screens/contacts/index";
import Invoices from "./screens/invoices/index";
import UserForm from "./screens/form/index";
import Calender from "./screens/calender/index";
import FAQ from "./screens/faq/index";
import Bar from "./screens/bar/index";
import Pie from "./screens/pie/index";
import Line from "./screens/line/index";
import Geography from "./screens/geography/index";

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <MainSidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<UserForm />} />
              <Route path="/calender" element={<Calender />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
