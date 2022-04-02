import "./productPg.css";
const ProductPg = () => {
  return (
    <div className="productPg">
      {/* <!-- ................BASE CONTAINER............. --> */}
      <div class="baseContainer">
        {/* <!-- ................NAV BAR............. --> */}

        <nav class="navBar">
          <div class="heroContainer">
            <p class="heroTitle" onclick="window.location.href='/'">
              MyWebsite
            </p>
          </div>
          <div class="navBar-searchBar">
            <form class="searchBar">
              <input class="searchBar-input" placeholder="Search" />
            </form>
          </div>
          <ul class="navLinks">
            <li class="navLinksBtn">
              <button
                class="btn btn-secondary"
                onclick="window.location.href='/components/loginPg/index.html'"
              >
                Login
              </button>
            </li>
            <li
              class="navLinksBtn"
              onclick="window.location.href='/components/wishListPg/index.html'"
            >
              <div class="ic-badge container">
                <i class="fa fa-heart ic"></i>
                <div class="iconBadge">3</div>
              </div>
            </li>
            <li
              class="navLinksBtn"
              onclick="window.location.href='/components/cartPg/index.html'"
            >
              <div class="ic-badge Container">
                <i class="fa fa-shopping-cart ic"></i>
                <div class="iconBadge">0</div>
              </div>
            </li>
          </ul>
        </nav>
        {/* <!-- ................NAV BAR............. --> */}
        {/* <!-- ................PAGE CONTENT ............................... --> */}

        <div class="page-content">
          <div class="product-content">
            {/* <!-- sideNav --> */}
            <div class="sideNav pd-25">
              <div class="sideNav-header">
                <p class="sideNav-title fs-M fw-bold">Filters</p>
                <button class="btn btn-link sideNavBtn">Clear</button>
              </div>
              <div class="sideNav-content">
                <div class="cost-filter">
                  <p class="sideNav-title fs-M fw-bold">Price</p>
                  <div class="slider-container">
                    <input
                      class="slider"
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
                    <div class="slider-values">
                      <p>50</p>
                      <p>125</p>
                      <p>200</p>
                    </div>
                  </div>
                </div>
                <div class="catagory-filter">
                  <p class="sideNav-title fs-M fw-bold">Category</p>
                  <div class="checkbox">
                    <div class="option1">
                      <input type="checkbox" value="Men" id="option1" />
                      <label for="option1">Men Clothing</label>
                    </div>
                    <div class="option1">
                      <input type="checkbox" value="Women" id="option2" />
                      <label for="option2">Women Clothing</label>
                    </div>
                  </div>
                </div>
                <div class="rating-filter">
                  <p class="sideNav-title fs-M fw-bold">Rating</p>
                  <div class="rating">
                    <div class="radio-1">
                      <input type="radio" value="" id="radio-1" name="radio" />
                      <label for="radio-1">4 star</label>
                    </div>
                    <div class="radio-2">
                      <input type="radio" value="" id="radio-2" name="radio" />
                      <label for="radio-2">3 star</label>
                    </div>
                    <div class="radio-3">
                      <input type="radio" value="" id="radio-3" name="radio" />
                      <label for="radio-3">2 star</label>
                    </div>
                    <div class="radio-4">
                      <input type="radio" value="" id="radio-4" name="radio" />
                      <label for="radio-4">1 star</label>
                    </div>
                  </div>
                </div>
                <div class="sortBy-filter">
                  <p class="sideNav-title fs-M fw-bold">Sort By</p>
                  <div class="sortBy">
                    <div class="sort-1">
                      <input type="radio" value="" id="sort-1" name="sort" />
                      <label for="sort-1">Price-Low to High</label>
                    </div>
                    <div class="sort-2">
                      <input type="radio" value="" id="sort-2" name="sort" />
                      <label for="sort-2">Price-High to Low</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- main Content --> */}
            <div class="main-content">
              <div class="main-content-header">
                <p>Showing All Products</p>
              </div>
              <div class="product-list">
                <div class="indi-product">
                  <div class="card">
                    <div class="card-img-container">
                      <i class="fa fa-heart-o icon-badge"></i>
                      <img
                        class="card-img"
                        src="/Utils/images/image 1.png"
                        alt="Card image"
                      />
                    </div>
                    <div class="card-title">
                      <p class="title-heading">Nike Sneakers</p>
                      <p class="title-subHeading">Sub-title</p>
                      <div class="price">
                        <p class="current-price">Rs. 2500</p>
                      </div>
                    </div>
                    <div class="card-button">
                      <button class="btn btn-primary button-add">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div class="indi-product">
                  <div class="card">
                    <div class="card-img-container">
                      <i class="fa fa-heart-o icon-badge"></i>
                      <img
                        class="card-img"
                        src="/Utils/images/image 1.png"
                        alt="Card image"
                      />
                    </div>
                    <div class="card-title">
                      <p class="title-heading">Nike Sneakers</p>
                      <p class="title-subHeading">Sub-title</p>
                      <div class="price">
                        <p class="current-price">Rs. 2500</p>
                      </div>
                    </div>
                    <div class="card-button">
                      <button class="btn btn-primary button-add">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div class="indi-product">
                  <div class="card">
                    <div class="card-img-container">
                      <i class="fa fa-heart-o icon-badge"></i>
                      <img
                        class="card-img"
                        src="/Utils/images/image 1.png"
                        alt="Card image"
                      />
                    </div>
                    <div class="card-title">
                      <p class="title-heading">Nike Sneakers</p>
                      <p class="title-subHeading">Sub-title</p>
                      <div class="price">
                        <p class="current-price">Rs. 2500</p>
                      </div>
                    </div>
                    <div class="card-button">
                      <button class="btn btn-primary button-add">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div class="indi-product">
                  <div class="card">
                    <div class="card-img-container">
                      <i class="fa fa-heart-o icon-badge"></i>
                      <img
                        class="card-img"
                        src="/Utils/images/image 1.png"
                        alt="Card image"
                      />
                    </div>
                    <div class="card-title">
                      <p class="title-heading">Nike Sneakers</p>
                      <p class="title-subHeading">Sub-title</p>
                      <div class="price">
                        <p class="current-price">Rs. 2500</p>
                      </div>
                    </div>
                    <div class="card-button">
                      <button class="btn btn-primary button-add">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div class="indi-product">
                  <div class="card">
                    <div class="card-img-container">
                      <i class="fa fa-heart-o icon-badge"></i>
                      <img
                        class="card-img"
                        src="/Utils/images/image 1.png"
                        alt="Card image"
                      />
                    </div>
                    <div class="card-title">
                      <p class="title-heading">Nike Sneakers</p>
                      <p class="title-subHeading">Sub-title</p>
                      <div class="price">
                        <p class="current-price">Rs. 2500</p>
                      </div>
                    </div>
                    <div class="card-button">
                      <button class="btn btn-primary button-add">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div class="indi-product">
                  <div class="card">
                    <div class="card-img-container">
                      <i class="fa fa-heart-o icon-badge"></i>
                      <img
                        class="card-img"
                        src="/Utils/images/image 1.png"
                        alt="Card image"
                      />
                    </div>
                    <div class="card-title">
                      <p class="title-heading">Nike Sneakers</p>
                      <p class="title-subHeading">Sub-title</p>
                      <div class="price">
                        <p class="current-price">Rs. 2500</p>
                      </div>
                    </div>
                    <div class="card-button">
                      <button class="btn btn-primary button-add">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div class="indi-product">
                  <div class="card">
                    <div class="card-img-container">
                      <i class="fa fa-heart-o icon-badge"></i>
                      <img
                        class="card-img"
                        src="/Utils/images/image 1.png"
                        alt="Card image"
                      />
                    </div>
                    <div class="card-title">
                      <p class="title-heading">Nike Sneakers</p>
                      <p class="title-subHeading">Sub-title</p>
                      <div class="price">
                        <p class="current-price">Rs. 2500</p>
                      </div>
                    </div>
                    <div class="card-button">
                      <button class="btn btn-primary button-add">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div class="indi-product">
                  <div class="card">
                    <div class="card-img-container">
                      <i class="fa fa-heart-o icon-badge"></i>
                      <img
                        class="card-img"
                        src="/Utils/images/image 1.png"
                        alt="Card image"
                      />
                    </div>
                    <div class="card-title">
                      <p class="title-heading">Nike Sneakers</p>
                      <p class="title-subHeading">Sub-title</p>
                      <div class="price">
                        <p class="current-price">Rs. 2500</p>
                      </div>
                    </div>
                    <div class="card-button">
                      <button class="btn btn-primary button-add">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
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
