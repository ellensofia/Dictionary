import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useEffect, useState } from "react";
import { DarkModeBtn } from "./DarkMode.style";

export default function Darkmode() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
      setIsDark(true);
    } else {
      document.body.classList.remove("dark");
      setIsDark(false);
    }
  }, [isDark]);

  const toggleDarkmode = () => {
    setIsDark(!isDark);
  };

  return (
    <DarkModeBtn>
      {isDark ? (
        <LightModeIcon onClick={toggleDarkmode} data-testid={"darkmode"} />
      ) : (
        <DarkModeIcon onClick={toggleDarkmode} data-testid={"darkmode"} />
      )}
    </DarkModeBtn>
  );
}
