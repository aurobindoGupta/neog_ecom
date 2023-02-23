import { useState } from "react";
import axios from "axios";
import "./product_card.css";
import image_1 from "../../utils/images/image_1.webp";
import { useCartContext } from "../../context/cartProvider";
import { useWishlistContext } from "../../context/wishlistProvider";

const Product_Card = ({ indiData }) => {
  const [addToWishlist, setAddToWishlist] = useState(false);
  const [addToCart, setAddToCart] = useState(false);
  const [cartValue, setCartValue] = useCartContext();
  const [wishlistValue, setWishlistValue]=useWishlistContext();
  const handleAddTocart = (data) => {
    //TODO:add toast
    setAddToCart(!addToCart);
    if (addToCart === true) {
      const tempArr = cartValue.filter((item) => item.productData._id !== data._id);
      console.log(tempArr);
      setCartValue(tempArr);
    } else {
      setCartValue([...cartValue, { id: cartValue.length++, productData: data }]);
    }
  };
const handleAddToWishlist=(data)=>{
    //TODO:add toast
  setAddToWishlist(!addToWishlist)
  if (addToWishlist === true) {
    const tempArr = wishlistValue.filter((item) => item.productData._id !== data._id);
    console.log(tempArr);
    setWishlistValue(tempArr);
  } else {
    setWishlistValue([...wishlistValue, { id: wishlistValue.length++, productData: data }]);
  }
}
  return (
    <div className="indi-product">
      <div className="card">
        <div className="card-img-container">
          <i
            className={`fa ${addToWishlist ? "fa-heart" : "fa-heart-o"} icon-badge`}
            title="Wishlist"
            onClick={() => handleAddToWishlist(indiData)}
          ></i>
          <img
          //!SET LOADER HERE
            className="card-img"
            src= {indiData.images}
            alt={image_1}
            onError={(e) => (e.target.src = image_1)}
          />
        </div>
        <div className="card-title">
          <p className="title-heading">{indiData.title}</p>
          <p className="title-subHeading">{indiData.categoryName}</p>
          <div className="price">
            <p className="current-price">Rs.{indiData.price}</p>
          </div>
        </div>
        <div className="card-button">
          <button
            className="btn btn-primary button-add"
            onClick={() => {
  
              handleAddTocart(indiData);
            }}
          >
            {addToCart ? "remove" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Product_Card;
