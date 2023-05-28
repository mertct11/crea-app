import React from "react";
import ProductDetailLogic from "./ProductDetail.logic";

function ProductDetail() {
  const { handleClick } = ProductDetailLogic();

  return (
    <div>
      <h1
        onClick={() => {
          handleClick();
        }}
      >
        This is the ProductDetail page
      </h1>
    </div>
  );
}

export default ProductDetail;
