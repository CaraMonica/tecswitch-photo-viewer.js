import { render, waitFor } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("Should render without error", () => {
    render(<App />);
  });

  it("Should contain main image", async () => {
    const app = render(<App />);
    await waitFor(() => app.getAllByAltText("main"));
  });
});
