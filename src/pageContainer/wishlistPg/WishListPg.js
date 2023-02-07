import NavBar from "../../Components/navbar/NavBar";
import { default as WishListCard } from "../../Components/wishlist_card/WishList_Card";
import "./wishlistPg.css";
const WishListPg = () => {
  return (
    <div className="wishlistPg">
      {/* <!-- ................BASE CONTAINER............. --> */}
      <div class="baseContainer">
        {/* <!-- ................NAV BAR............. --> */}

        <NavBar />
        {/* <!-- ................NAV BAR............. --> */}
        {/* <!-- ................PAGE CONTENT ............................... --> */}

        <div class="page-content">
          <p class="wishlist-pg-title fw-bold fs-M">My WishList(2)</p>
          <div class="wishlist-pg">
            <WishListCard
              productTitle="Winter Jacket"
              productSubTitle="Sub-title"
              productCost="2500"
            />
            <WishListCard
              productTitle="Winter Jacket"
              productSubTitle="Sub-title"
              productCost="2500"
            />

            <WishListCard
              productTitle="Winter Jacket"
              productSubTitle="Sub-title"
              productCost="2500"
            />

            <WishListCard
              productTitle="Winter Jacket"
              productSubTitle="Sub-title"
              productCost="2500"
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
