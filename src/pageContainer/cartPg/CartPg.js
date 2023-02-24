import "./cartPg.css";
import { v4 as uuid } from "uuid";
import { default as HorizontalCard } from "../../Components/horizontal_card/Horizontal_Card";
import NavBar from "../../Components/navbar/NavBar";
import image_1 from "../../utils/images/image_1.webp";
import { useCartContext } from "../../context/cartProvider";

const CartPg = () => {
  const [cartValue, setCartValue] = useCartContext();

  const defaultData = {
    id: uuid(),
    productData: {
      title: "Empty cart",
      categoryName: "Sub-title",
      price: 0,
      images: image_1 ,
    },
    qty:0
  };
 console.log(cartValue);
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
                Object.values(cartValue).map((item,key) => {
                  return <HorizontalCard data={item} id={key}></HorizontalCard>;
                })
              ) : (
                <HorizontalCard data={defaultData}></HorizontalCard>
              )}
            </div>
            <div className="bill-content">
              <div className="bill-header fw-semiBold">
                <p>PRICE DETAILS</p>
              </div>
              <hr />
              <div className="order-content">
                <div className="cost-total indi-row">
                  <p>Price(2 Items)</p>
                  <p>Rs.5409</p>
                </div>
                <div className="discount-total indi-row">
                  <p>Discount</p>
                  <p>- Rs.1207</p>
                </div>
                <div className="dilevery-total indi-row">
                  <p>Delivery Charges</p>
                  <p>Rs.500</p>
                </div>
                <hr />
                <div className="total-amt indi-row fw-semiBold">
                  <p>TOTAL AMOUNT</p>
                  <p>Rs.3508</p>
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
