import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/cartProvider";
import { useLoginContext } from "../../context/loginProvider";
import { useNavSearchContext } from "../../context/navSearchProvider";
import { useWishlistContext } from "../../context/wishlistProvider";
import "./navbar.css";
const NavBar = (props) => {
  const [searchBarValue, setSearchBarValue] = useState("");
  const [dropdownDisplay, setDropdownDisplay] = useState(false);
  const [cartValue] = useCartContext();
  const [wishlistValue] = useWishlistContext();
  const [searchBarInput, setSearchBarInput] = useNavSearchContext();
  const [isLoggedIn, setIsLoggedIn] = useLoginContext();

  let navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));
  useEffect(() => {
    console.log("yoyoyo", searchBarInput);
    setSearchBarValue(searchBarInput);
  }, [searchBarInput]);

  const handleSearchBarInput = (e) => {
    let timer;
    e.preventDefault();
    setSearchBarValue(e.target.value);
    clearTimeout(timer);
    timer = setTimeout(() => {
      setSearchBarInput(e.target.value);
    }, 2000);
  };
  const handleLogout = () => {
    //! localStorage.clear(); to enable forgot pass to access data from local storage.
    setIsLoggedIn(false);
  };
  const UserProfileDropdown = (e) => {
    return (
      <div
        className={`userProfile-Dropdown ${dropdownDisplay ? null : "hidden"}`}
        onMouseLeave={() => setDropdownDisplay(false)}
      >
        <button className="btn btn-link dropdown-btn">
          {userData ? userData.firstName : null}
        </button>
        <button
          className="btn btn-link dropdown-btn"
          onClick={() => handleLogout()}
        >
          LogOut
        </button>
      </div>
    );
  };
  return (
    <div className="navBarContainer">
      <nav className="navBar">
        <div className="heroContainer">
          <p className="heroTitle" onClick={() => navigate("/")}>
            MyWebsite
          </p>
        </div>
        <div
          className={`navBar-searchBar ${props.searchBar ? "hidden" : null}`}
        >
          <form className="searchBar">
            <input
              className="searchBar-input"
              placeholder="Search"
              value={searchBarValue}
              onChange={(e) => handleSearchBarInput(e)}
            />
          </form>
        </div>
        <div>
          <ul className={`navLinks ${props.navLinks ? "hidden" : null}`}>
            <li className={`navLinksBtn  ${props.login ? "hidden" : null}`}>
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
            <li
              className={`navLinksBtn ${props.login ? null : "hidden"} `}
              onClick={() => setDropdownDisplay(!dropdownDisplay)}
            >
              <div className="ic-badge Container">
                <i className="fa fa-user-circle ic"></i>
                <UserProfileDropdown />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
