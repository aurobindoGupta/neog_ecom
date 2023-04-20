import { useState } from "react";
import "./product_card.css";
import image_1 from "../../utils/images/image_1.webp";
import { useCartContext } from "../../context/cartProvider";
import { useWishlistContext } from "../../context/wishlistProvider";
import { useEffect } from "react";

const Product_Card = ({ indiData }) => {
  const [addToWishlist, setAddToWishlist] = useState(false);
  const [addToCart, setAddToCart] = useState(false);
  const [cartValue, setCartValue] = useCartContext();
  const [wishlistValue, setWishlistValue] = useWishlistContext();

  useEffect(() => {
    if (wishlistValue.length>0) {
      wishlistValue.forEach((item) => {
        if (item.productData._id === indiData._id) {
          setAddToWishlist(true);
        }
      });
    }
  }, []);
  useEffect(() => {
    cartValue.forEach((item) => {
      if (item.productData._id === indiData._id) {
        setAddToCart(true);
      }
    });
  }, [cartValue]);

  const handleAddTocart = (data) => {
    //TODO:add toast
    setAddToCart(!addToCart);
    if (addToCart === true) {
      const tempArr = cartValue.filter(
        (item) => item.productData._id !== data._id
      );
      console.log(tempArr);
      setCartValue(tempArr);
    } else {
      setCartValue([
        ...cartValue,
        { id: cartValue.length++, productData: data, qty: 1 },
      ]);
    }
  };

  const handleAddToWishlist = (data) => {
    //TODO:add toast
    setAddToWishlist(!addToWishlist);
    //*initial state of addtoWishlist is false so wishlist btn not Red, hence if
    //*  addtoWishlist is true means that the user has removed product from wishlist..as the state will change when the fn ends..
    if (addToWishlist === true) {
      const tempArr = wishlistValue.filter(
        (item) => item.productData._id !== data._id
      );
      console.log(tempArr);
      setWishlistValue(tempArr);
    } else {
      setWishlistValue([
        ...wishlistValue,
        { id: wishlistValue.length++, productData: data },
      ]);
    }
  };

  return (
    <div className="indi-product">
      <div className="card">
        <div className="card-img-container">
          <i
            className={`fa ${
              addToWishlist ? "fa-heart" : "fa-heart-o"
            } icon-badge`}
            title={addToWishlist ? "Remove From WishList" : "Add To WishList"}
            onClick={() => handleAddToWishlist(indiData)}
          ></i>
          <img
            //!SET LOADER HERE
            className="card-img"
            src={indiData.images}
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
