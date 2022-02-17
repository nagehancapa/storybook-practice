import Standard from "./Products.stories";

it("is data fetched", async () => {
  const productFetch = await fetch("/api/products");
  const productResponse = await productFetch.json();

  expect(productResponse.data).toMatchObject([
    {
      id: 1,
      name: "Mocha",
      price: 3.5,
      imageUrl: "https://source.unsplash.com/tNALoIZhqVM/200x100/",
    },
    {
      id: 2,
      name: "Latte",
      price: 3.5,
      imageUrl: "https://source.unsplash.com/tNALoIZhqVM/200x100/",
    },
    {
      id: 3,
      name: "Vanilla Latte",
      price: 3.5,
      imageUrl: "https://source.unsplash.com/tNALoIZhqVM/200x100/",
    },
  ]);
});
