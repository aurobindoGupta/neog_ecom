import { useEffect, useState } from "react";
import "./productPg.css";
import NavBar from "../../Components/navbar/NavBar";
import { default as ProductCard } from "../../Components/product_card/Product_Card";
import { useProductContext } from "../../context/productProvider";
import { useCategoryContext } from "../../context/categoryProvider";
import priceFilter from "../../Components/Productfilters/priceFilter";
import ratingFilterMod from "../../Components/Productfilters/ratingFilterMod";

const ProductPg = () => {
  const [checkFilter, setCheckFilter] = useState([]);
  const [sliderFilter, setSliderFilter] = useState(0);
  const [ratingFilter, setRatingFilter] = useState("");
  const [sortByFilter, setSortByFilter] = useState("");
  const [filteredProductData, setFilteredProductData] = useState([]);
  const [productData] = useProductContext();
  const [categoryData] = useCategoryContext();
  useEffect(() => {
    const handleCategoryData = () => {
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
    handleCategoryData();
  }, [categoryData]);

  useEffect(() => {
    let timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      handlePriceFilterData(sliderFilter);
    }, 1000);
  }, [sliderFilter]);

  useEffect(() => {
    let timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      handleCategoryFilteredData();
    }, 1000);
  }, [checkFilter]);

  useEffect(() => {
    let timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      handleRatingFilterData(ratingFilter);
    }, 1000);
  }, [ratingFilter]);

  useEffect(() => {
    let timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      handleSortByCostFilterData(sortByFilter);
    }, 1000);
  }, [sortByFilter]);

  //* handle checked/unchecked
  const handleCheckFilter = (checkFilterDataItem) => {
    setCheckFilter(
      [...checkFilter].map((temp) => {
        if (temp.categoryName === checkFilterDataItem.categoryName) {
          return {
            ...temp,
            checked: !temp.checked,
          };
        } else return temp;
      })
    );
  };

  //* handling category filter
  const handleCategoryFilteredData = () => {
    setFilteredProductData([]);
    let checkFilterDummy = [];
    let filteredProductDataDummy = [];

    if (ratingFilter !== "") {
      Object.keys(checkFilter).map((itm, key) => {
        if (checkFilter[itm].checked === true) {
          checkFilterDummy.push(checkFilter[itm]);
          filteredProductDataDummy.push(
            ...Object.values(productData).filter(
              (item) => item.categoryName === checkFilter[itm].categoryName
            )
          );
          if (ratingFilter === "4-star") {
            filteredProductDataDummy = filteredProductDataDummy.filter(
              (item) => item.rating === 4
            );
          } else if (ratingFilter === "3-star") {
            filteredProductDataDummy = filteredProductDataDummy.filter(
              (item) => item.rating === 3
            );
          } else if (ratingFilter === "2-star") {
            filteredProductDataDummy.filter((item) => item.rating === 2);
          } else if (ratingFilter === "1-star") {
            filteredProductDataDummy = filteredProductDataDummy.filter(
              (item) => item.rating === 1
            );
          } else {
            console.log("something WRONG/No rating");
          }
          if (filteredProductDataDummy.length === 0) {
            handleClearFilter();
            alert("No Product Matching");
          }
          setFilteredProductData([...filteredProductDataDummy]);
        }
      });
    } else if (sortByFilter !== "") {
      Object.keys(checkFilter).map((itm, key) => {
        if (checkFilter[itm].checked === true) {
          checkFilterDummy.push(checkFilter[itm]);
          filteredProductDataDummy.push(
            ...Object.values(productData).filter(
              (item) => item.categoryName === checkFilter[itm].categoryName
            )
          );
          switch (sortByFilter) {
            case "LowToHigh":
              filteredProductDataDummy = filteredProductDataDummy.sort(
                (a, b) => Number(a.price) - Number(b.price)
              );
              break;
            case "HighToLow":
              filteredProductDataDummy = filteredProductDataDummy.sort(
                (a, b) => Number(b.price) - Number(a.price)
              );
              break;
            default:
              console.log("Wrong Sort/No sort category");
          }
          setFilteredProductData([...filteredProductDataDummy]);
        }
      });
    } else {
      Object.keys(checkFilter).map((itm, key) => {
        if (checkFilter[itm].checked === true) {
          checkFilterDummy.push(checkFilter[itm]);
          filteredProductDataDummy.push(
            ...Object.values(productData).filter(
              (item) => item.categoryName === checkFilter[itm].categoryName
            )
          );
          setFilteredProductData([...filteredProductDataDummy]);
        }
      });
    }
    //? added cuz if checked after rating/sort used items added are unsorted
    // setRatingFilter("");
    // setSortByFilter("");
  };
  console.log("filteredDummyData", filteredProductData);

  //* handling rating filter
  const handleRatingFilterData = (rating) => {
    let filteredRatingData = [];

    filteredRatingData =
      filteredProductData.length > 0
        ? ratingFilterMod(rating, filteredProductData)
        : ratingFilterMod(rating, productData);
    filteredRatingData !== -1
      ? setFilteredProductData([...filteredRatingData])
      : handleClearFilter();

    // if (rating === "4-star") {
    //   if (filteredProductData.length === 0) {
    //     filteredRatingData.push(
    //       ...Object.values(productData).filter((item) => item.rating === 4)
    //     );
    //     setFilteredProductData([...filteredRatingData]);
    //   } else {
    //     filteredRatingData.push(
    //       ...Object.values(filteredProductData).filter(
    //         (item) => item.rating === 4
    //       )
    //     );
    //     if (filteredRatingData.length === 0) {
    //       handleClearFilter();
    //       alert("No Product Matching");
    //     } else {
    //       setFilteredProductData([...filteredRatingData]);
    //     }
    //   }
    // } else if (rating === "3-star") {
    //   if (filteredProductData.length === 0) {
    //     filteredRatingData.push(
    //       ...Object.values(productData).filter((item) => item.rating === 3)
    //     );
    //     setFilteredProductData([...filteredRatingData]);
    //   } else {
    //     filteredRatingData.push(
    //       ...Object.values(filteredProductData).filter(
    //         (item) => item.rating === 3
    //       )
    //     );
    //     if (filteredRatingData.length === 0) {
    //       handleClearFilter();
    //       alert("No Product Matching");
    //     } else {
    //       setFilteredProductData([...filteredRatingData]);
    //     }
    //   }
    // } else if (rating === "2-star") {
    //   if (filteredProductData.length === 0) {
    //     filteredRatingData.push(
    //       ...Object.values(productData).filter((item) => item.rating === 2)
    //     );
    //     setFilteredProductData([...filteredRatingData]);
    //   } else {
    //     filteredRatingData.push(
    //       ...Object.values(filteredProductData).filter(
    //         (item) => item.rating === 2
    //       )
    //     );
    //     if (filteredRatingData.length === 0) {
    //       handleClearFilter();
    //       alert("No Product Matching");
    //     } else {
    //       setFilteredProductData([...filteredRatingData]);
    //     }
    //   }
    // } else if (rating === "1-star") {
    //   if (filteredProductData.length === 0) {
    //     filteredRatingData.push(
    //       ...Object.values(productData).filter((item) => item.rating === 1)
    //     );
    //     setFilteredProductData([...filteredRatingData]);
    //   } else {
    //     filteredRatingData.push(
    //       ...Object.values(filteredProductData).filter(
    //         (item) => item.rating === 1
    //       )
    //     );
    //     if (filteredRatingData.length === 0) {
    //       handleClearFilter();
    //       alert("No Product Matching");
    //     } else {
    //       setFilteredProductData([...filteredRatingData]);
    //     }
    //   }
    // } else {
    //   console.log("something WRONG/No rating");
    //  }
  };

  //* handling sortBy filter
  const handleSortByCostFilterData = (sortBy) => {
    let filteredSortData = [];
    switch (sortBy) {
      case "LowToHigh":
        if (filteredProductData.length > 0) {
          filteredSortData.push(
            ...filteredProductData.sort(
              (a, b) => Number(a.price) - Number(b.price)
            )
          );
          setFilteredProductData([...filteredSortData]);
        } else {
          filteredSortData.push(
            ...Object.values(productData).sort((a, b) => {
              if (Number(a.price) >= Number(b.price)) {
                return 1;
              } else {
                return -1;
              }
            })
          );
          console.log(filteredSortData);
          setFilteredProductData([...filteredSortData]);
        }
        break;
      case "HighToLow":
        if (filteredProductData.length > 0) {
          filteredSortData.push(
            ...Object.values(filteredProductData).sort(
              (a, b) => Number(b.price) - Number(a.price)
            )
          );
          setFilteredProductData([...filteredSortData]);
        } else {
          filteredSortData.push(
            ...Object.values(productData).sort((a, b) => {
              if (Number(a.price) < Number(b.price)) {
                return 1;
              } else {
                return -1;
              }
            })
          );
          console.log(filteredSortData);
          setFilteredProductData([...filteredSortData]);
        }
        break;
      default:
        console.log("Wrong Sort/No sort");
    }
  };

  const handlePriceFilterData = (sliderCost) => {
    if (filteredProductData.length > 0) {
      setFilteredProductData([...priceFilter(filteredProductData, sliderCost)]);
    } else {
      setFilteredProductData([...priceFilter(productData, sliderCost)]);
    }
    if (ratingFilter !== "") {
    }
  };
  //* handling  filter clear
  const handleClearFilter = () => {
    setCheckFilter(
      [...checkFilter].map((temp) => {
        return {
          ...temp,
          checked: false,
        };
      })
    );
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
                    {checkFilter.map((item, key) => {
                      if (Object.hasOwn(item, "checked")) {
                        return (
                          <div
                            className="checkboxOption"
                            onClick={() => handleCheckFilter(item)}
                          >
                            <label htmlFor="option1">
                              <input
                                type="checkbox"
                                value={item.categoryName}
                                id={key}
                                checked={item.checked}
                                className="labelSidenav"
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
                      <label htmlFor="radio-1">
                        <div className="starGrp fs-M">
                          <ul>
                            <li className="fa fa-star"></li>
                            <li className="fa fa-star"></li>
                            <li className="fa fa-star"></li>
                            <li className="fa fa-star"></li>
                          </ul>
                        </div>
                      </label>
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
                      <label htmlFor="radio-2">
                        <div className="starGrp fs-M">
                          <ul>
                            <li className="fa fa-star"></li>
                            <li className="fa fa-star"></li>
                            <li className="fa fa-star"></li>
                            <li className="fa fa-star-o"></li>
                          </ul>
                        </div>
                      </label>
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
                      <label htmlFor="radio-3">
                        <div className="starGrp fs-M">
                          <ul>
                            <li className="fa fa-star"></li>
                            <li className="fa fa-star"></li>
                            <li className="fa fa-star-o"></li>
                            <li className="fa fa-star-o"></li>
                          </ul>
                        </div>
                      </label>
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
                      <label htmlFor="radio-4">
                        <div className="starGrp fs-M">
                          <ul>
                            <li className="fa fa-star"></li>
                            <li className="fa fa-star-o"></li>
                            <li className="fa fa-star-o"></li>
                            <li className="fa fa-star-o"></li>
                          </ul>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="sortBy-filter">
                  <p className="sideNav-title fs-M fw-bold">Sort By</p>
                  <div className="sortBy">
                    <div className="sort-1">
                      <input
                        type="radio"
                        value="LowToHigh"
                        id="sort-1"
                        name="sort"
                        checked={sortByFilter === "LowToHigh"}
                        className="labelSidenav"
                        onChange={(e) => setSortByFilter(e.target.value)}
                      />
                      <label htmlFor="sort-1">Price-Low to High</label>
                    </div>
                    <div className="sort-2">
                      <input
                        type="radio"
                        value="HighToLow"
                        id="sort-2"
                        name="sort"
                        checked={sortByFilter === "HighToLow"}
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
                {filteredProductData.length > 0
                  ? Object.values(filteredProductData).map((item, key) => {
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
                    })
                  : Object.values(productData).map((item, key) => {
                      //console.log("HELLO", filteredProductData);
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
