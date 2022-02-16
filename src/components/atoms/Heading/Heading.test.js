import { render, screen } from "@testing-library/react";
import { Standard } from "./Heading.stories";

it("there is heading", () => {
  render(<Standard />);
  const heading = screen.getByText(/This is a heading/i);
  expect(heading).toBeInTheDocument();
});
