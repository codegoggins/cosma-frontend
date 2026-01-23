import { AntdConfig } from "./config/AntdConfig";
import { ThemeProvider } from "./theme/ThemeProvider";
import { ThemeToggle } from "./theme/ThemeToggle";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="cosma-theme">
      <AntdConfig>
        <div className="w-full h-40 bg-yellow-100">
          <ThemeToggle />
        </div>
      </AntdConfig>
    </ThemeProvider>
  );
};

export default App;
