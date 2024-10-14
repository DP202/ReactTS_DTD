import React from "react";

export default function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search ..." />
      <div>
        <input type="checkbox" />
        On show products in stock
      </div>
    </form>
  );
}
