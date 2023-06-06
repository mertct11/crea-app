import React, { useEffect } from "react";
import ProductDetailLogic from "./ProductDetail.logic";
import "./ProductDetail.style.scss";
import { CurrencyTypes } from "@/enums";
import { GlobalLayout } from "@/layouts";
import { CommentCard, StarRating, Tabs, TextArea } from "@/components";
import { ProductDetailTabNames } from "@/consts/ProductDetailTabNames";
import { ICommentItem } from "@/interfaces/ICommentItem";
function ProductDetail() {
  const {
    product,
    handleTabClick,
    selectedTab,
    choosenTabTitle,
    handleCommentChange,
    handleRatingChange,
    handleSaveClick,
    saveErrorText,
    commentRate,
    comments,
    totalCommentCount,
    avarageRating,
  } = ProductDetailLogic();

  return (
    <GlobalLayout isBgGradient={false}>
      <div className="product-detail-page">
        <h1>Product Detail</h1>
        <div className="product-detail-top">
          <div className="product-detail-image">
            <img src={product?.image} alt="product_image" />
          </div>
          <div className="product-info">
            <h2 className="product-detail-name">{product?.name}</h2>
            <p className="product-description">{product?.description}</p>
            <p className="delivery-date">
              Delivery Date: {product?.delivery_date}
            </p>
            <div className="price-container">
              <span className="currency">
                {product?.currency === CurrencyTypes.USD ? "$" : "₺"}
              </span>
              <span className="price">{product?.price}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-detail-bottom">
        <Tabs
          tabCount={ProductDetailTabNames?.length}
          tabTitles={ProductDetailTabNames}
          onClick={handleTabClick}
          selectedTab={selectedTab}
        />
        {selectedTab === 0 ? (
          <div className="bottom-container">
            <h4>Information</h4>
            {product?.description}
          </div>
        ) : (
          <div className="code-blog">
            <div className="left-detail-content">
              {comments?.map((cItem: ICommentItem) => {
                return (
                  <CommentCard
                    image={cItem?.image}
                    username={cItem?.username}
                    comment={cItem?.comment}
                    rating={cItem?.rating}
                  />
                );
              })}
            </div>
            <div className="right-detail-content">
              <div className="sticky-container">
                <div className="avarages-container">
                  <div className="star-av-container">
                    <h4>Total comment count:</h4>
                    {totalCommentCount}
                  </div>
                  <div className="star-av-container">
                    <h4>
                      {"Stars Avarage:("}
                      {avarageRating.toFixed(2)}
                      {")"}{" "}
                    </h4>
                    <StarRating value={avarageRating} isEditable={false} />
                  </div>
                </div>
                <div className="giving-comment-block">
                  <TextArea
                    placeholder="Leave comment & rating"
                    onChange={handleCommentChange}
                  />
                  <StarRating
                    value={commentRate}
                    isEditable={true}
                    ratingChange={handleRatingChange}
                  />
                  {saveErrorText !== "" ? (
                    <div className="error-text">{saveErrorText}</div>
                  ) : null}
                  <button className="save-button" onClick={handleSaveClick}>
                    {"Save"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </GlobalLayout>
  );
}

export default ProductDetail;
