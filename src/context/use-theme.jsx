import { createContext, useCallback, useMemo, useState } from "react";
import { THEME } from "../constants/theme-constants";

export const ThemeContext = createContext({ theme: THEME.DARK });

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEME.DARK);

  const changeTheme = useCallback(() => {
    setTheme((prev) => prev === THEME.DARK ? THEME.LIGHT : THEME.DARK);
  }, [])

  const value = useMemo(() => ({
    theme,
    changeTheme,
  }), [theme, changeTheme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}