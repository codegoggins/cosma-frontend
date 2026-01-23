import { ConfigProvider, theme as antdThemeUtils } from "antd";
import { useEffect, useState } from "react";
import { useTheme } from "../theme/useTheme";
import { getAntdTheme } from "../theme/getAntTheme";

export function AntdConfig({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  const [systemDark, setSystemDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(() => {
    if (theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => setSystemDark(e.matches);

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [theme]);

  const isDarkMode = theme === "dark" || (theme === "system" && systemDark);

  return (
    <ConfigProvider
      theme={{
        ...getAntdTheme(isDarkMode),
        algorithm: isDarkMode
          ? antdThemeUtils.darkAlgorithm
          : antdThemeUtils.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
}
