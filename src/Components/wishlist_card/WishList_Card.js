import { useState } from "react";
import "./wishlist_card.css";
import { useWishlistContext } from "../../context/wishlistProvider";
import { useCartContext } from "../../context/cartProvider";
const WishList_Card = ({ data }) => {
  
  const [wishList, setWishList]= useState(true);
  const [wishlistValue,setWishlistValue]= useWishlistContext();
  const [cartValue, setCartValue] = useCartContext();

console.log(data);
  const handleWishlistData=()=>{
    setWishList(!wishList)
    const tempArr = wishlistValue.filter((item) => item.productData._id !== data._id);
    console.log(tempArr);
    setWishlistValue(tempArr);
  }
  const handleMoveToCart=()=>{
    setCartValue([...cartValue, { id: cartValue.length++, productData: data, qty: 1 }]);
    const tempArr = wishlistValue.filter((item) => item.productData._id !== data._id);
    console.log(tempArr);
    setWishlistValue(tempArr);
  }
  return (
    <div className="wishList-content">
      <div className="card">
        <div className="card-img-container">
        <i className={`fa ${wishList?"fa-heart":"fa-heart-o"} icon-badge`} title="Remove" onClick={()=>handleWishlistData()}></i>
          <img className="card-img" src={data.images} alt="Card" />
        </div>
        <div className="card-title">
          <p className="title-heading">{data.title}</p>
          <p className="title-subHeading">{data.categoryName}</p>
          <div className="price">
            <p className="current-price">Rs.{data.price}</p>
          </div>
        </div>
        <div className="card-button">
          <button className="btn btn-secondary button-add" onClick={()=>{handleMoveToCart()}}>Move to Cart</button>
        </div>
      </div>
    </div>
  );
};
export default WishList_Card;
