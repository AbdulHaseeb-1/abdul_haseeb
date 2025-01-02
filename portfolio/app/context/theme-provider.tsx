"use client";

import { createContext, useContext, useState } from "react";

const themeContext = createContext({
  color: "",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setColor: (color: string) => {},
});
const availableColors = {
  bg_white: "bg-white",
  txt_white: "text-white",
  br_white: "border-white",
  bg_green: "bg-green-500",
  txt_green: "text-green-500",
  br_green: "border-green-500",
  bg_orange: "bg-orange-500",
  txt_orange: "text-orange-500",
  br_orange: "border-orange-500",
  bg_blue: "bg-blue-500",
  txt_blue: "text-blue-500",
  br_blue: "border-blue-500",
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [color, setColor] = useState(availableColors.bg_orange);

  return (
    <themeContext.Provider value={{ color, setColor }}>
      {children}
    </themeContext.Provider>
  );
}
export const useTheme = () => useContext(themeContext);
