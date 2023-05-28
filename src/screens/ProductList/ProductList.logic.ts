import React from "react";

const ProductListLogic = () => {
  const handleClick = () => {
    console.log("handle Click ProductList");
  };

  return {
    handleClick,
  };
};

export default ProductListLogic;
