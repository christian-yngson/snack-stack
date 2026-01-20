import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./components/global/Header";
import Stack from "@mui/material/Stack";
import { Outlet } from "react-router";
function App() {
  return (
    <Stack>
      <Header />
      <Outlet />
    </Stack>
  );
}

export default App;
