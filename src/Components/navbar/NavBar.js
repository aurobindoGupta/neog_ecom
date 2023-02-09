import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/cartProvider";
import "./navbar.css";
const NavBar = () => {
  const [cartValue] = useCartContext();
  let navigate = useNavigate();
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
            <input className="searchBar-input" placeholder="Search" />
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
              <div className="iconBadge">0</div>
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
