import React from "react";

export default function ProductRow({ product }) {
  console.log("--Product ====", product);
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
