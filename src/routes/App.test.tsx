import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Vad ska jag laga för mat/i);
  expect(linkElement).toBeInTheDocument();
});
