import "./productPg.css";
import NavBar from "../../Components/navbar/NavBar";
import { default as ProductCard } from "../../Components/product_card/Product_Card";
import image_1 from "../../utils/images/image_1.webp";


const ProductPg = () => {
  return (
    <div className="productPg">
      {/* <!-- ................BASE CONTAINER............. --> */}
      <div className="baseContainer">
        {/* <!-- ................NAV BAR............. --> */}

        <NavBar />
        {/* <!-- ................NAV BAR............. --> */}
        {/* <!-- ................PAGE CONTENT ............................... --> */}

        <div className="page-content">
          <div className="product-content">
            {/* <!-- sideNav --> */}
            <div className="sideNav pd-25">
              <div className="sideNav-header">
                <p className="sideNav-title fs-M fw-bold">Filters</p>
                <button className="btn btn-link sideNavBtn">Clear</button>
              </div>
              <div className="sideNav-content">
                <div className="cost-filter">
                  <p className="sideNav-title fs-M fw-bold">Price</p>
                  <div className="slider-container">
                    <input
                      className="slider"
                      type="range"
                      min="50"
                      max="200"
                      value="100"
                      list="ticks"
                    />
                    <datalist id="ticks">
                      <option value="50" label="50"></option>
                      <option value="125" label="125"></option>
                      <option value="200" label="200"></option>
                    </datalist>
                    <div className="slider-values">
                      <p>50</p>
                      <p>125</p>
                      <p>200</p>
                    </div>
                  </div>
                </div>
                <div className="catagory-filter">
                  <p className="sideNav-title fs-M fw-bold">Category</p>
                  <div className="checkbox">
                    <div className="option1">
                      <input type="checkbox" value="Men" id="option1" />
                      <label for="option1">Men Clothing</label>
                    </div>
                    <div className="option1">
                      <input type="checkbox" value="Women" id="option2" />
                      <label for="option2">Women Clothing</label>
                    </div>
                  </div>
                </div>
                <div className="rating-filter">
                  <p className="sideNav-title fs-M fw-bold">Rating</p>
                  <div className="rating">
                    <div className="radio-1">
                      <input type="radio" value="" id="radio-1" name="radio" />
                      <label for="radio-1">4 star</label>
                    </div>
                    <div className="radio-2">
                      <input type="radio" value="" id="radio-2" name="radio" />
                      <label for="radio-2">3 star</label>
                    </div>
                    <div className="radio-3">
                      <input type="radio" value="" id="radio-3" name="radio" />
                      <label for="radio-3">2 star</label>
                    </div>
                    <div className="radio-4">
                      <input type="radio" value="" id="radio-4" name="radio" />
                      <label for="radio-4">1 star</label>
                    </div>
                  </div>
                </div>
                <div className="sortBy-filter">
                  <p className="sideNav-title fs-M fw-bold">Sort By</p>
                  <div className="sortBy">
                    <div className="sort-1">
                      <input type="radio" value="" id="sort-1" name="sort" />
                      <label for="sort-1">Price-Low to High</label>
                    </div>
                    <div className="sort-2">
                      <input type="radio" value="" id="sort-2" name="sort" />
                      <label for="sort-2">Price-High to Low</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- main Content --> */}
            <div className="main-content">
              <div className="main-content-header">
                <p>Showing All Products</p>
              </div>
              <div className="product-list">
                <ProductCard
                  productTitle="Nike Sneakers"
                  subTitle="Basketball Shoes"
                  cost="2500"
                  productImg={image_1}
                />
                <ProductCard
                  productTitle="Nike Sneakers"
                  subTitle="Basketball Shoes"
                  cost="2500"
                  productImg={image_1}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ................PAGE CONTENT ............................... --> */}
        {/* <!-- ................FOOTER ............................... --> */}

        {/* <!-- ................FOOTER ............................... --> */}
      </div>
      {/* <!-- ................BASE CONTAINER............. --> */}
    </div>
  );
};
export default ProductPg;
