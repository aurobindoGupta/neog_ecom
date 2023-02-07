import { useState } from "react";
import "./product_card.css";
import image_1 from "../../utils/images/image_1.webp";

const Product_Card = ({productTitle, subTitle, cost, productImg}) => {
  const [wishList, setWishList]= useState(false);
  console.log(wishList);
  return (
    <div className="indi-product">
      <div className="card">
        <div className="card-img-container">
          <i className={`fa ${wishList?"fa-heart":"fa-heart-o"} icon-badge`} title="Wishlist" onClick={()=>setWishList(!wishList)}></i>
          <img
            className="card-img"
            src={productImg? productImg: image_1}
            alt="Card"
          />
        </div>
        <div className="card-title">
          <p className="title-heading">{productTitle}</p>
          <p className="title-subHeading">{subTitle}</p>
          <div className="price">
            <p className="current-price">Rs.{cost}</p>
          </div>
        </div>
        <div className="card-button">
          <button className="btn btn-primary button-add">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export default Product_Card;
