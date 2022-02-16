import { render, screen } from "@testing-library/react";
import { Standard } from "./Button.stories";

it("there is button", () => {
  render(<Standard />);
  const button = screen.getByRole("button", { name: "This is a button" });
  expect(button).toBeInTheDocument();
});
