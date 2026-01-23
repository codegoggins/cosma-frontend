import { useTheme } from "./useTheme";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-12 w-12 flex items-center justify-center rounded-md p-2 text-black"
    >
      <MdOutlineLightMode
        className={`absolute h-5 w-5 transition-all duration-300 ease-in-out
          ${isDark ? "scale-0 rotate-90" : "scale-100 rotate-0"}
        `}
      />
      <MdOutlineDarkMode
        className={`absolute h-5 w-5 transition-all duration-300 ease-in-out
          ${isDark ? "scale-100 rotate-0" : "scale-0 -rotate-90"}
        `}
      />
    </div>
  );
}
