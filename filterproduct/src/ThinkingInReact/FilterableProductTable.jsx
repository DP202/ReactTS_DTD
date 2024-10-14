import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default function FilterableProductTable() {
  const productListMock = [
    { category: "Iphone 12", price: "$49.99", stocked: true, name: "CR7" },
    { category: "Iphone 12", price: "$59.99", stocked: false, name: "M10" },
    { category: "Iphone 14", price: "$69.99", stocked: true, name: "CR8" },
    { category: "Iphone 14", price: "$79.99", stocked: false, name: "M11" },
    { category: "Iphone 16", price: "$89.99", stocked: true, name: "CR71" },
    { category: "Iphone 16", price: "$97.99", stocked: false, name: "G81" },
  ];

  return (
    <div className="container">
      <SearchBar />
      <ProductTable productList={productListMock} />
    </div>
  );
}
