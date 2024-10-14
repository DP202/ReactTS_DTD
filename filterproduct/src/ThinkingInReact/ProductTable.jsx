import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ productList }) {
  console.log(productList);
  let lastCategory = null;
  const rows = [];
  productList.forEach((productItem) => {
    if (productItem.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          key={productItem.category}
          category={productItem.category}
        />
      );
    }
    rows.push(<ProductRow key={productItem.name} product={productItem} />);
    console.log(productItem);
    lastCategory = productItem.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
