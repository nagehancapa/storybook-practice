import React from "react";
import ProductListItem from "../ProductListItem";

const Loading = () => <span>Loading</span>;
const Error = ({ message }) => <span>An error has occured! {message}</span>;

export const statusTypes = {
  loading: "loading",
  errored: "errored",
  loaded: "loaded",
};

export default function ProductList({ status, data, onAddToCart }) {
  if (status === statusTypes.loading) {
    return <Loading />;
  }
  if (status === statusTypes.errored) {
    return <Error message="Failed to load data" />;
  }
  return data.map((item) => (
    <ProductListItem
      key={item.id}
      name={item.name}
      price={item.price}
      onAddToCart={() => {
        onAddToCart(item.id);
      }}
      imageUrl={item.imageUrl}
    />
  ));
}

ProductList.defaultProps = {
  status: statusTypes.loading,
};
