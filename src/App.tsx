import { RouterProvider } from "react-router-dom";
import { AntdConfig } from "./config/AntdConfig";
import { ThemeProvider } from "./theme/ThemeProvider";
import { router } from "./router";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="cosma-theme">
      <AntdConfig>
        <RouterProvider router={router} />
      </AntdConfig>
    </ThemeProvider>
  );
};

export default App;
