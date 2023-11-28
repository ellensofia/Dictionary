import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Darkmode", () => {
  it("Sould be possible to switch between dark- and lightmode", async () => {
    render(<App />);
    const user = userEvent.setup();
    const toggleDarkModeBtn = screen.queryByTestId("darkmode");
    if (toggleDarkModeBtn) {
      // Expect dark mode to be applied initially
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
