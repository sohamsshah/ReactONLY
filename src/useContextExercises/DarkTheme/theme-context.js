import { createContext, useContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ userTheme, children }) {
  const [theme, setTheme] = useState(userTheme.light);
  return (
    <ThemeContext.Provider value={{ theme, setTheme, userTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
