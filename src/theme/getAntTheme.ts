import type { ThemeConfig } from "antd";

export const getAntdTheme = (isDarkMode: boolean): ThemeConfig => {
  const colors = isDarkMode
    ? {
        primary: "#fafafa",
        text: "#fafafa",
        border: "#27272a",
        bgContainer: "#18181b", // Card bg
        inputBg: "#27272a",
        selectBg: "#27272a",
        itemHover: "#3f3f46",
      }
    : {
        primary: "#0F1715",
        text: "#0F1715",
        border: "#F0F0F0",
        bgContainer: "#FAFAFA",
        inputBg: "#F0F0F0",
        selectBg: "#FAFAFA",
        itemHover: "#F6F6F6",
      };

  return {
    token: {
      fontFamily: '"Space Grotesk", sans-serif',
      colorPrimary: colors.primary,
      colorTextBase: colors.text,
      colorBorder: colors.border,
      colorBgContainer: colors.bgContainer,
      borderRadius: 8,
    },
    components: {
      Input: {
        colorBgContainer: colors.inputBg,
        activeBorderColor: colors.primary,
        hoverBorderColor: colors.primary,
        colorTextPlaceholder: isDarkMode ? "#a1a1aa" : "#a1a1aa", // muted-foreground
        activeShadow: "none",
        controlHeight: 38,
      },
      Select: {
        colorBgContainer: colors.selectBg,
        colorBgElevated: colors.selectBg,
        optionSelectedBg: isDarkMode ? "#3f3f46" : "#F6F6F6",
        colorText: colors.text,
        colorBorder: colors.border,
        selectorBg: colors.selectBg,
      },
      Tabs: {
        itemSelectedColor: colors.primary,
        inkBarColor: colors.primary,
        itemHoverColor: colors.primary,
        itemColor: isDarkMode ? "#a1a1aa" : "#71717a", // muted text for inactive tabs
      },
      Button: {
        primaryColor: isDarkMode ? "#18181b" : "#ffffff", // Text on primary button
        colorPrimary: colors.primary,
        colorPrimaryHover: isDarkMode ? "#e4e4e7" : "#2C3331",
      },
      Card: {
        colorBgContainer: colors.bgContainer,
        colorBorderSecondary: colors.border,
      },
    },
  };
};
