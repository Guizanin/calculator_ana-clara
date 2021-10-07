import React, { createContext, useCallback, useState } from "react";
import { ThemeProvider } from "styled-components";
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";

export const themeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(light);

  const toogleTheme = useCallback(() => {
    setTheme(theme.title === "light" ? dark : light);
  }, [theme]);

  return (
    <themeContext.Provider
      value={{
        theme,
        setTheme,
        toogleTheme,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </themeContext.Provider>
  );
}
