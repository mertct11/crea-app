import React from "react";
import "./ProductCard.style.scss";
import StarRating from "../StarRating/StarRating";

interface IProductListItem {
  id: number;
  rating: number;
  image: string;
  name: string;
  price: string;
  currency: string;
  handleCardClick: (id: string) => void;
}
type ProductCardProps = {
  product: IProductListItem;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, rating, name, price, image, currency, handleCardClick } = product;

  return (
    <div
      onClick={() => {
        handleCardClick(id.toString());
      }}
      className="product-card"
    >
      <img className="product-image" src={image} alt={name} />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <div className="product-price">
          {price} {currency}
        </div>
      </div>
      <div className="star-rating-container">
        <StarRating value={rating} isEditable={false} />
      </div>
    </div>
  );
};

export default ProductCard;
