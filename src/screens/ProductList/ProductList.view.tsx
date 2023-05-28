import React from "react";
import ProductListLogic from "./ProductList.logic";
function ProductList() {
  const { handleClick } = ProductListLogic();

  return (
    <div>
      <h1
        onClick={() => {
          handleClick();
        }}
      >
        This is the ProductList page
      </h1>
    </div>
  );
}

export default ProductList;
