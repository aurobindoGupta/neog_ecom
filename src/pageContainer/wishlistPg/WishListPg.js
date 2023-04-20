import "./wishlistPg.css";
import NavBar from "../../Components/navbar/NavBar";
import { default as WishListCard } from "../../Components/wishlist_card/WishList_Card";
import { useWishlistContext } from "../../context/wishlistProvider";
import { useLoginContext } from "../../context/loginProvider";

const WishListPg = () => {
  const [wishlistValue] = useWishlistContext();
  const [isLoggegIn] = useLoginContext();

  console.log("WISH", wishlistValue);
  console.log("ADATA", JSON.parse(localStorage.getItem("userData")));

  return (
    <div className="wishlistPg">
      {/* <!-- ................BASE CONTAINER............. --> */}

      <div className="baseContainer">
        {/* <!-- ................NAV BAR............. --> */}

        <NavBar searchBar={true} login={isLoggegIn ? true : false} />
        {/* <!-- ................NAV BAR............. --> */}
        {/* <!-- ................PAGE CONTENT ............................... --> */}

        <div className="page-content">
          <div className="wishlistPg-content">
            <p className="wishlist-pg-title fw-bold fs-M">{`My WishList(${wishlistValue.length})`}</p>
            <div className="wishlistPg-products">
              {wishlistValue.length === 0 && <h1>EMPTY CART</h1>}
              {wishlistValue &&
                wishlistValue.map((item, key) => {
                  return <WishListCard data={item.productData} key={key} />;
                })}
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
export default WishListPg;
