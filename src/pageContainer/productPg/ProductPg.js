import { useEffect, useState } from "react";
import axios from "axios";
import "./productPg.css";
import NavBar from "../../Components/navbar/NavBar";
import { default as ProductCard } from "../../Components/product_card/Product_Card";
import { useProductContext } from "../../context/productProvider";
import { useCategoryContext } from "../../context/categoryProvider";

const ProductPg = () => {
  const [checkFilter, setCheckFilter] = useState([]);
  const [sliderFilter, setSliderFilter] = useState(0);
  const [ratingFilter, setRatingFilter] = useState("");
  const [sortByFilter, setSortByFilter] = useState("");
  const [productData] = useProductContext();
  const [categoryData] = useCategoryContext();
  useEffect(() => {
    const handleCategories = () => {
      
      const categoryFilterDummy = [];
      for (let item = 0; item < categoryData.length; item++) {
        if (
          categoryData[item].categoryName !==
          (categoryData[item + 1] ? categoryData[item + 1].categoryName : null)
        ) {
          categoryData[item]["checked"] = false;
          categoryFilterDummy.push({
            categoryName: categoryData[item].categoryName,
            checked: categoryData[item].checked,
          });
        }
      }
      setCheckFilter(categoryFilterDummy);
    };
    handleCategories();
  }, [categoryData]);

  const handleClearFilter = () => {
    setCheckFilter(false);
    setSliderFilter(0);
    setRatingFilter("");
    setSortByFilter("");
  };

  console.log(
    { sliderFilter },
    { ratingFilter },
    { checkFilter },
    { sortByFilter }
  );
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
            <div className="sideNav">
              <div className="sideNav-header">
                <p className="sideNav-title fs-M fw-bold">Filters</p>
                <button
                  className="btn btn-link sideNavBtn"
                  onClick={handleClearFilter}
                >
                  Clear
                </button>
              </div>
              <div className="sideNav-content">
                <div className="cost-filter">
                  <p className="sideNav-title fs-M fw-bold">Price</p>
                  <div className="slider-container">
                    <input
                      className="slider"
                      type="range"
                      min="0"
                      value={sliderFilter}
                      max="5000"
                      list="ticks"
                      onChange={(e) => setSliderFilter(e.target.value)}
                    />
                    <datalist id="ticks">
                      <option value="0" label="0"></option>
                      <option value="2500" label="2500"></option>
                      <option value="5000" label="5000"></option>
                    </datalist>
                    <div className="slider-values">
                      <p>0</p>
                      <p>2500</p>
                      <p>5000</p>
                    </div>
                  </div>
                </div>
                <div className="catagory-filter">
                  <p className="sideNav-title fs-M fw-bold">Category</p>
                  <div className="checkbox">
                    {checkFilter.map((item) => {
                      console.log(item);
                      if (Object.hasOwn(item, "checked")) {
                        return (
                          <div className="checkboxOption">
                            <label htmlFor="option1">
                              <input
                                type="checkbox"
                                value="Men"
                                id="option1"
                                checked={item.checked}
                                className="labelSidenav"
                                onChange={() =>
                                  setCheckFilter(
                                    [...checkFilter].map((temp) => {
                                      if (
                                        temp.categoryName === item.categoryName
                                      ) {
                                        return {
                                          ...temp,
                                          checked: true,
                                        };
                                      } else return temp;
                                    })
                                  )
                                }
                              />
                              {item.categoryName}
                            </label>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
                <div className="rating-filter">
                  <p className="sideNav-title fs-M fw-bold">Rating</p>
                  <div className="rating">
                    <div className="radio-1">
                      <input
                        type="radio"
                        value="4-star"
                        id="radio-1"
                        name="radio"
                        checked={ratingFilter === "4-star"}
                        className="labelSidenav"
                        onChange={(e) => setRatingFilter(e.target.value)}
                      />
                      <label htmlFor="radio-1">4 star</label>
                    </div>
                    <div className="radio-2">
                      <input
                        type="radio"
                        value="3-star"
                        id="radio-2"
                        name="radio"
                        checked={ratingFilter === "3-star"}
                        className="labelSidenav"
                        onChange={(e) => setRatingFilter(e.target.value)}
                      />
                      <label htmlFor="radio-2">3 star</label>
                    </div>
                    <div className="radio-3">
                      <input
                        type="radio"
                        value="2-star"
                        id="radio-3"
                        name="radio"
                        checked={ratingFilter === "2-star"}
                        className="labelSidenav"
                        onChange={(e) => setRatingFilter(e.target.value)}
                      />
                      <label htmlFor="radio-3">2 star</label>
                    </div>
                    <div className="radio-4">
                      <input
                        type="radio"
                        value="1-star"
                        id="radio-4"
                        name="radio"
                        checked={ratingFilter === "1-star"}
                        className="labelSidenav"
                        onChange={(e) => setRatingFilter(e.target.value)}
                      />
                      <label htmlFor="radio-4">1 star</label>
                    </div>
                  </div>
                </div>
                <div className="sortBy-filter">
                  <p className="sideNav-title fs-M fw-bold">Sort By</p>
                  <div className="sortBy">
                    <div className="sort-1">
                      <input
                        type="radio"
                        value="Low-to-High"
                        id="sort-1"
                        name="sort"
                        checked={sortByFilter === "Low-to-High"}
                        className="labelSidenav"
                        onChange={(e) => setSortByFilter(e.target.value)}
                      />
                      <label htmlFor="sort-1">Price-Low to High</label>
                    </div>
                    <div className="sort-2">
                      <input
                        type="radio"
                        value="High-to-Low"
                        id="sort-2"
                        name="sort"
                        checked={sortByFilter === "High-to-Low"}
                        className="labelSidenav"
                        onChange={(e) => setSortByFilter(e.target.value)}
                      />
                      <label htmlFor="sort-2">Price-High to Low</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- main Content --> */}
            <div className="main-content">
              <div className="main-content-header">
                <p>
                  Showing All Products{" "}
                  {sliderFilter !== 0 ? `[Below: Rs.${sliderFilter}]` : ``}
                  {checkFilter !== { Men: false, Women: false }
                    ? checkFilter.Men
                      ? "[Gender: Men]"
                      : checkFilter.Women
                      ? "[Gender: Women]"
                      : ""
                    : ``}
                  {ratingFilter !== "" ? `[Rating: ${ratingFilter}]` : ``}
                  {sortByFilter !== "" ? `[Sorted By: ${sortByFilter}]` : ``}
                </p>
              </div>
              <div className="product-list">
                {Object.values(productData).map((item, key) => {
                  return (
                    <ProductCard
                      productTitle={item.title}
                      subTitle={item.categoryName}
                      cost={item.price}
                      productImg={item.images}
                      productId={item._id}
                      key={key}
                    />
                  );
                })}
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
