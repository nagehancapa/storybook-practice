import { render, screen } from "@testing-library/react";
import { Standard } from "./Text.stories";

it("there is heading", () => {
  render(<Standard />);
  const text = screen.getByText(/This is some text/i);
  expect(text).toBeInTheDocument();
});
