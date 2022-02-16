import { render, screen } from "@testing-library/react";
import { Standard } from "./Card.stories";

it("there is card content", () => {
  render(<Standard />);
  const content = screen.getByText(/This content shows up in a card/i);
  expect(content).toBeInTheDocument();
});
