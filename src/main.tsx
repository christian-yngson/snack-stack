import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ThemeProvider from "./components/global/ThemeProvider";
import ReduxProvider from "./redux/ReduxProvider/ReduxProvider.tsx";
import RouterProvider from "./router/RouterProvider/RouterProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider>
      <ThemeProvider>
        <RouterProvider />
      </ThemeProvider>
    </ReduxProvider>
  </StrictMode>,
);
