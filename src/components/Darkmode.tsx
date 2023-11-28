import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useEffect, useState } from "react";
import { DarkModeBtn } from "./Darkmode.style";

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
      <DarkModeIcon onClick={toggleDarkmode} data-testid={"darkmode"} />
    </DarkModeBtn>
  );
}
