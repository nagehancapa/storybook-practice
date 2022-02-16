import { render, screen } from "@testing-library/react";
import { Loading, Errored, Standard } from "./ProductList.stories";

it("status is loading when loading", () => {
  render(<Loading />);
  const loading = screen.getByText(/Loading/i);
  expect(loading).toBeInTheDocument();
});

it("status is errored when errored", () => {
  render(<Errored />);
  const error = screen.getByText(/An error has occured!/i);
  expect(error).toBeInTheDocument();
});

it("all the data loaded", () => {
  render(<Standard />);
  const input = screen.getAllByText(/Add to Cart/i);
  expect(input.length).toBe(3);
});
