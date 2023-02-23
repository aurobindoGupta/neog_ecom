import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/cartProvider";
import { useNavSearchContext } from "../../context/navSearchProvider";
import { useWishlistContext } from "../../context/wishlistProvider";
import "./navbar.css";
const NavBar = () => {
  const [searchBarValue, setSearchBarValue] = useState();
  const [cartValue] = useCartContext();
  const [wishlistValue] = useWishlistContext();
  const [searchBarInput,setSearchBarInput] = useNavSearchContext();

  let navigate = useNavigate();
  const handleSearchBarInput = (e) => {
    let timer;
    e.preventDefault();
    setSearchBarValue(e.target.value);
    clearTimeout(timer);
    timer = setTimeout(()=>{
      setSearchBarInput(e.target.value);
    },2000)
  };

  return (
    <div>
      <nav className="navBar">
        <div className="heroContainer">
          <p className="heroTitle" onClick={() => navigate("/")}>
            MyWebsite
          </p>
        </div>
        <div className="navBar-searchBar">
          <form className="searchBar">
            <input
              className="searchBar-input"
              placeholder="Search"
              value={searchBarValue}
              onChange={(e) => handleSearchBarInput(e)}
            />
          </form>
        </div>
        <ul className="navLinks">
          <li className="navLinksBtn">
            <button
              className="btn btn-secondary"
              onClick={() => navigate("/loginPg")}
            >
              Login
            </button>
          </li>
          <li className="navLinksBtn" onClick={() => navigate("/wishlistPg")}>
            <div className="ic-badge container">
              <i className="fa fa-heart ic"></i>
              <div className="iconBadge">{wishlistValue.length}</div>
            </div>
          </li>
          <li className="navLinksBtn" onClick={() => navigate("/cartPg")}>
            <div className="ic-badge Container">
              <i className="fa fa-shopping-cart ic"></i>
              <div className="iconBadge">{cartValue.length}</div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
