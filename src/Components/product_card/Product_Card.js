import { useState } from "react";
import "./product_card.css";
import image_1 from "../../utils/images/image_1.webp";
import { useCartContext } from "../../context/cartProvider";

const Product_Card = ({productTitle, subTitle, cost, productImg, productId}) => {
  const [wishList, setWishList]= useState(false);
  const [addToCart, setAddToCart] = useState(false);
   const [cartValue, setCartValue] = useCartContext();
  const handleAddTocart=(id)=>{
    if(addToCart === true){
      const tempArr=cartValue.filter((item)=> item.productId !== id)
      console.log(tempArr);
      setCartValue(tempArr)
    }
    else{
      setCartValue([...cartValue,{id: cartValue.length++, productId: id}])
    }
    
  }
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
    
          <button className="btn btn-primary button-add" onClick={()=>{setAddToCart(!addToCart);handleAddTocart(productId)}}>{addToCart?"remove":"Add to Cart"}</button>
        </div>
      </div>
    </div>
  );
};
export default Product_Card;
