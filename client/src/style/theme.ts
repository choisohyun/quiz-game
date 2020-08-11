import { DefaultTheme } from "styled-components";
import { customMediaQuery } from "@Style/util";

export const theme: DefaultTheme = {
  dark: {
    mainBackground: "#333",
    // neutral color
    title: "rgba(255,255,255,0.85)",
    primaryText: "rgba(255,255,255,0.65)",
    secondaryText: "rgba(255,255,255,0.45)",
    disable: "rgba(255,255,255,0.25)",
    border: "rgba(255,255,255,0.15)",
    divider: "rgba(255,255,255,0.06)",
    background: "rgba(255,255,255,0.04)",
    tableHeader: "rgba(255,255,255,0.02)",
    // point-color
    blue1: "#f1f8ff",
    blue2: "#c0d3eb",
    blue3: "#00adb5",
    green: "#1fab89",
    gray1: "#fafbfc",
    gray2: "#eee",
    gray3: "#d3d4d8",
    gray4: "#393e46",
    black: "#222831",
    red: "#fc5185",
    white: "#fff",
  },
  light: {
    mainBackground: "#fff",
    // neutral color
    title: "rgba(0, 0, 0, 0.85)",
    primaryText: "rgba(0, 0, 0, 0.75)",
    secondaryText: "rgba(0, 0, 0, 0.45)",
    disable: "rgba(0, 0, 0, 0.25)",
    border: "rgba(0, 0, 0, 0.15)",
    divider: "rgba(0, 0, 0, 0.06)",
    background: "rgba(0, 0, 0, 0.04)",
    tableHeader: "rgba(0, 0, 0, 0.02)",
    // point-color
    blue1: "#f1f8ff",
    blue2: "#c0d3eb",
    blue3: "#00adb5",
    green: "#1fab89",
    gray1: "#fafbfc",
    gray2: "#eee",
    gray3: "#d3d4d8",
    gray4: "#393e46",
    black: "#222831",
    red: "#fc5185",
    white: "#fff",
  },
  fontSizes: {
    xsm: "10px",
    sm: "12px",
    md: "16px",
    lg: "20px",
    xl: "24px",
    xxl: "28px",
  },
  fontWeights: {
    extraBold: 800,
    bold: 700,
    semiBold: 600,
    regular: 400,
  },
  media: {
    desktop: customMediaQuery(922),
    tablet: customMediaQuery(768),
    phone: customMediaQuery(576),
  },
  response: {},
};