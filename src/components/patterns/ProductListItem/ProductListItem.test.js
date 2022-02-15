import { render, screen, fireEvent } from "@testing-library/react";
import ProductListItem from "./ProductListItem";

it("shows on sale label when isOnSale", () => {
  render(<ProductListItem name="Mocha" price={3.5} imageUrl="..." isOnSale />);
  const onSale = screen.getByText(/(On Sale)/i);
  expect(onSale).toBeInTheDocument();
});

it("disables the button when disables", () => {
  render(<ProductListItem name="Mocha" price={3.5} isSoldOut />);
  const soldOut = screen.getByText(/Sold out/i);
  expect(soldOut).toHaveProperty("disabled");
});

it("calls callback when button Add to Cart pressed", () => {
  const onAddToCart = jest.fn();
  render(
    <ProductListItem name="Mocha" price={3.5} onAddToCart={onAddToCart} />
  );
  const input = screen.getByText(/Add to Cart/i);
  fireEvent.click(input);
  expect(onAddToCart).toHaveBeenCalled();
});
