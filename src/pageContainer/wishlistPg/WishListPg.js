
import "./wishlistPg.css";
import NavBar from "../../Components/navbar/NavBar";
import { default as WishListCard } from "../../Components/wishlist_card/WishList_Card";
import image_1 from "../../utils/images/image_1.webp";
import { useWishlistContext } from "../../context/wishlistProvider";



const WishListPg = () => {
  const[wishlistValue]= useWishlistContext();
  console.log("WISH",wishlistValue);
  return (
    <div className="wishlistPg">
      {/* <!-- ................BASE CONTAINER............. --> */}

      <div className="baseContainer">

        {/* <!-- ................NAV BAR............. --> */}

        <NavBar />
        {/* <!-- ................NAV BAR............. --> */}
        {/* <!-- ................PAGE CONTENT ............................... --> */}


        <div className="page-content">
          <p className="wishlist-pg-title fw-bold fs-M">My WishList(2)</p>
          <div className="wishlist-pg">

            <WishListCard
              productTitle="Winter Jacket"
              productSubTitle="Sub-title"
              productCost="2500"

              productImg={image_1}
            />
            <WishListCard
              productTitle="Winter Jacket"
              productSubTitle="Sub-title"
              productCost="2500"

              productImg={image_1}

            />

            <WishListCard
              productTitle="Winter Jacket"
              productSubTitle="Sub-title"
              productCost="2500"

              productImg={image_1}

            />

            <WishListCard
              productTitle="Winter Jacket"
              productSubTitle="Sub-title"
              productCost="2500"

              productImg={image_1}

            />
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
