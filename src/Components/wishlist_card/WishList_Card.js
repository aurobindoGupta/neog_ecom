import { useState } from "react";
import "./wishlist_card.css";
const WishList_Card = ({ productTitle, productSubTitle, productCost, productImg }) => {
  const [wishList, setWishList]= useState(false);
  return (
    <div class="wishList-content">
      <div className="card">
        <div className="card-img-container">
        <i className={`fa ${wishList?"fa-heart":"fa-heart-o"} icon-badge`} onClick={()=>setWishList(!wishList)}></i>
          <img className="card-img" src={productImg} alt="Card" />
        </div>
        <div className="card-title">
          <p className="title-heading">{productTitle}</p>
          <p className="title-subHeading">{productSubTitle}</p>
          <div className="price">
            <p className="current-price">Rs.{productCost}</p>
          </div>
        </div>
        <div class="card-button">
          <button class="btn btn-secondary button-add">Move to Cart</button>
        </div>
      </div>
    </div>
  );
};
export default WishList_Card;
