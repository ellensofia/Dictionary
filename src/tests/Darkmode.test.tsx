import { DarkMode } from "@mui/icons-material";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Unit testing for darkmode component", () => {
  it("Sould be possible to switch between dark- and lightmode", async () => {
    render(<DarkMode />);
    const user = userEvent.setup();
    const toggleDarkModeBtn = screen.queryByTestId("darkmode");

    // Expect dark mode to be applied initially
    if (toggleDarkModeBtn) {
      expect(document.body.classList.contains("dark")).toBe(true);

      // Click to switch to lightmode
      await user.click(toggleDarkModeBtn);
      expect(document.body.classList.contains("dark")).toBe(false);

      // Click to switch back to darkmode
      await user.click(toggleDarkModeBtn);
      expect(document.body.classList.contains("dark")).toBe(true);
    }
  });
});
