import React from "react";
import ProductListLogic from "./ProductList.logic";
import { GlobalLayout } from "@/layouts";
import "./ProductList.style.scss";
import { ProductCard } from "@/components";
function ProductList() {
  const { productList, handleCardClick } = ProductListLogic();

  return (
    <GlobalLayout isBgGradient={false}>
      <div className="product-list-page">
        <h1>Product List</h1>
        <div className="product-list">
          {productList?.map((product) => (
            <ProductCard
              key={product.id}
              product={{ ...product, handleCardClick }}
            />
          ))}
        </div>
      </div>
    </GlobalLayout>
  );
}

export default ProductList;
