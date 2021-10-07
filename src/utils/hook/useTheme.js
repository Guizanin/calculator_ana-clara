import { useContext } from "react";
import { themeContext } from "../context/themeContext";

export const useTheme = () => useContext(themeContext);
