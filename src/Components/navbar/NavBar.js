import "./navbar.css"
const NavBar = () => {
  return (
    <div>
      <nav className="navBar">
        <div className="heroContainer">
          <p className="heroTitle" onclick="window.location.href='/'">
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
              onclick="window.location.href='/components/loginPg/index.html'"
            >
              Login
            </button>
          </li>
          <li
            className="navLinksBtn"
            onclick="window.location.href='/components/wishListPg/index.html'"
          >
            <div className="ic-badge container">
              <i className="fa fa-heart ic"></i>
              <div className="iconBadge">0</div>
            </div>
          </li>
          <li
            className="navLinksBtn"
            onclick="window.location.href='/components/cartPg/index.html'"
          >
            <div className="ic-badge Container">
              <i className="fa fa-shopping-cart ic"></i>
              <div className="iconBadge">0</div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
