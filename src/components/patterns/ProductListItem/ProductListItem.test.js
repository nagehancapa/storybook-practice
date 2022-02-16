import { render, screen, fireEvent } from "@testing-library/react";
import { OnSale, SoldOut, Standard } from "./ProductListItem.stories";

it("shows on sale label when isOnSale", () => {
  render(<OnSale />);
  const onSale = screen.getByText(/(On Sale)/i);
  expect(onSale).toBeInTheDocument();
});

it("disables the button when disables", () => {
  render(<SoldOut />);
  const soldOut = screen.getByText(/Sold out/i);
  expect(soldOut).toHaveProperty("disabled");
});

it("calls callback when button Add to Cart pressed", () => {
  const onAddToCart = jest.fn();
  render(<Standard onAddToCart={onAddToCart} />);
  const input = screen.getByText(/Add to Cart/i);
  fireEvent.click(input);
  expect(onAddToCart).toHaveBeenCalled();
});
