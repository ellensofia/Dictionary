import { useEffect, useState } from "react";
import { DarkmodeBtn } from "./Darkmode.style";

export default function Darkmode() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
      setIsDark(true);
      console.log("dark");
    } else {
      document.body.classList.remove("dark");
      setIsDark(false);

      console.log("remove dark");
    }
  }, [isDark]);

  const toggleDarkmode = () => {
    setIsDark(!isDark);
  };

  return <DarkmodeBtn onClick={toggleDarkmode}>darkmode</DarkmodeBtn>;
}
