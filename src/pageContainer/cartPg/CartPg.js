import "./cartPg.css";
import { v4 as uuid } from "uuid";
import { default as HorizontalCard } from "../../Components/horizontal_card/Horizontal_Card";
import NavBar from "../../Components/navbar/NavBar";
import image_1 from "../../utils/images/image_1.webp";
import { useCartContext } from "../../context/cartProvider";
import { useState } from "react";

const CartPg = () => {
  const[distcountCode, setDiscountCode]= useState('');
  const[distcountValue, setDiscountValue]= useState(0);
  const[deliveryCharge, setDeliveryCharge]= useState(500);
  const [cartValue] = useCartContext();

  const defaultData = {
    id: uuid(),
    productData: {
      title: "Empty cart",
      categoryName: "Sub-title",
      price: 0,
      images: image_1,
    },
    qty: 0,
  };
  console.log(cartValue);
  const handleDiscount=(e)=>{
    e.preventDefault();
    let code= distcountCode;
    let tempDiscountValue= 0
    if(cartValue.length>0){
      switch(code){
        case 'dis10':
          tempDiscountValue= Number(handleCartTotal()) * 0.1
          break;
        case 'dis25':
          tempDiscountValue= Number(handleCartTotal()) * 0.25
          break;
        default: 
          tempDiscountValue= 0;

      }
    }
    else{
      if(code!=='')
      {
      console.log('No DICOUNT');
      }
    }
    setDiscountValue(tempDiscountValue);
  }
  const handleCartTotal = () => {
    let total = 0;
    cartValue.map((item) => {
      total = total + Number(item.productData.price);
      return total;
    });
    return total;
  };
  const handleGrossTotal = (cartTotal, discount, deliveryCharge) => {
    let total = 0;
    total = Number(cartTotal) - Number(discount) + Number(deliveryCharge);

    return total;
  };
  return (
    <div className="cartPg">
      {/* <!-- ................BASE CONTAINER............. --> */}
      <div className="baseContainer">
        {/* <!-- ................NAV BAR............. --> */}

        <NavBar />
        {/* <!-- ................NAV BAR............. --> */}
        {/* <!-- ................PAGE CONTENT ............................... --> */}

        <div className="page-content">
          <p className="card-pg-title fw-bold fs-M">
            My CART({cartValue.length})
          </p>
          <div className="cart-pg">
            <div className="cart-content">
              {cartValue.length > 0 ? (
                Object.values(cartValue).map((item, key) => {
                  return <HorizontalCard data={item} id={key}></HorizontalCard>;
                })
              ) : (
                <HorizontalCard data={defaultData}></HorizontalCard>
              )}
            </div>
            <div className="bill-content">
            <div className="discount-row">
              <input className="discount-input" type='text' onChange={(e)=> setDiscountCode(e.target.value)}/>
              <button className="btn btn-secondary discount-btn" type='submit' onClick={(e)=>handleDiscount(e)}>Go</button>
            </div>
              <div className="bill-header fw-semiBold">
                <p>PRICE DETAILS</p>
              </div>
              <hr />
              <div className="order-content">
                <div className="cost-total indi-row">
                  <p>Price({cartValue.length} Items)</p>
                  <p>Rs.{handleCartTotal()}</p>
                </div>
                <div className="discount-total indi-row">
                  <p>Discount</p>
                  <p>- Rs.{distcountValue}</p>
                </div>
                <div className="dilevery-total indi-row">
                  <p>Delivery Charges</p>
                  <p>Rs.{deliveryCharge}</p>
                </div>
                <hr />
                <div className="total-amt indi-row fw-semiBold">
                  <p>TOTAL AMOUNT</p>
                  <p>Rs.{handleGrossTotal(handleCartTotal(),distcountValue,deliveryCharge)}</p>
                </div>
                <hr />
                <p>You will save Rs.1999 on this order</p>
              </div>
              <div>
                <button className="btn btn-primary bill-btn">
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
          {/* <!-- ................PAGE CONTENT ............................... --> */}
          {/* <!-- ................FOOTER ............................... --> */}

          {/* <!-- ................FOOTER ............................... --> */}
        </div>
        {/* <!-- ................BASE CONTAINER............. --> */}
      </div>
    </div>
  );
};
export default CartPg;
