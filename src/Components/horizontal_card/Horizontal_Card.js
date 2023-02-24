import { useEffect } from "react";
import { useState } from "react";
import { useCartContext } from "../../context/cartProvider";
import { useWishlistContext } from "../../context/wishlistProvider";
import "./horizontal_card.css";

const Horizontal_card = ({ data }) => {
  const [addToWish, setAddToWish] = useState(false);
  const [cartValue, setCartValue] = useCartContext();
  const [wishlistValue, setWishlistValue] = useWishlistContext();

  const { productData, qty } = data;

  console.log(productData);
  const handleQuantity = (operator) => {
    switch (operator) {
      case "add":
        let tempCartValueAdd = cartValue.map((item) => {
          if (item.productData._id === productData._id) {
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        });
        setCartValue([...tempCartValueAdd]);
        break;
      case "sub":
        let tempCartValueSub = cartValue.map((item) => {
          if (item.productData._id === productData._id) {
            return { ...item, qty: item.qty - 1 };
          }
          return item;
        });
        setCartValue([...tempCartValueSub]);
        break;
      default:
        console.error("Horizontal card err");
    }
  };
  const handleRemoveFromCart = () => {
    let tempCart = cartValue.filter(
      (item) => item.productData._id !== productData._id
    );
    setCartValue(tempCart);
  };
  const handleWishList = (e) => {
    console.log(e);

    setAddToWish(!addToWish);
    switch (e) {
      case "Add to Wishlist":
        {
          let flag = 0;
          wishlistValue.map((item) => {
            console.log(item);
            if (item.productData._id === productData._id) {
              flag++;
              //!add toast
              return flag;
            } else {
              return flag;
            }
          });

          flag > 0
            ? alert("Already present")
            : setWishlistValue([
                ...wishlistValue,
                { id: wishlistValue.length++, productData: productData },
              ]);

              
        let tempCart = cartValue.filter(
            (item) => item.productData._id !== productData._id
          );
          setCartValue(tempCart);
        }
        break;
      case "Remove from Wishlist":
        let tempWishlist = wishlistValue.filter(
          (item) => item.productData._id !== productData._id
        );
        setWishlistValue(tempWishlist);
        break;
      default:
        console.error(e);
    }
  };

  return (
    <div className="card card-horizontal">
      <div className="card-img-container card-horizontal">
        <img
          className="card-img card-horizontal"
          src={productData.images}
          alt="Card"
        />
      </div>
      <div className="card-details card-horizontal">
        <div className="card-title card-horizontal">
          <p className="title-heading">{productData.title}</p>
          <p className="title-subHeading">{productData.categoryName}</p>
          <div className="price">
            <p className="current-price">Rs.{productData.price}</p>
          </div>
          <div className="productQty ">
            <button
              className="btn btn-secondary qty-sub"
              onClick={() => handleQuantity("sub")}
            >
              -
            </button>
            <p className="itemQty">{qty}</p>

            <button
              className="btn btn-secondary qty-add"
              onClick={() => handleQuantity("add")}
            >
              +
            </button>
          </div>
        </div>
        <div className="card-button card-horizontal">
          <button
            className="btn btn-primary button-add card-horizontal"
            onClick={() => handleRemoveFromCart()}
          >
            Remove from Cart
          </button>
          <button
            className="btn btn-secondary button-add card-horizontal"
            onClick={(e) => handleWishList(e.target.innerHTML)}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
export default Horizontal_card;
