import "./homePg.css";
import productRectangle1 from "../utils/images/productRectangle1.png";
import homepg_centre from "../utils/images/homepg_centre.png";
import image_1 from "../utils/images/image_1.png";
const HomePg = () => {
  return (
    <div className="homePg">
      {/* <!-- ................BASE CONTAINER............. --> */}
      <div className="baseContainer">
        {/* <!-- ................NAV BAR............. --> */}

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
                <div className="iconBadge">3</div>
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
        {/* <!-- ................NAV BAR............. --> */}
        {/* <!-- ................PAGE CONTENT ............................... --> */}

        <div className="pageContent">
          <div className="top-preview">
            <div className="preview-card style1">
              <div className="style1-group">
                <img
                  className="preview-card-image"
                  src={productRectangle1}
                  alt="product"
                />
                <p className="preview-card-title">Men</p>
              </div>
            </div>
            <div className="preview-card style1">
              <div className="style1-group">
                <img
                  className="preview-card-image"
                  src={productRectangle1}
                  alt="product"
                />
                <p className="preview-card-title">Men</p>
              </div>
            </div>
            <div className="preview-card style1">
              <div className="style1-group">
                <img
                  className="preview-card-image"
                  src={productRectangle1}
                  alt="product"
                />
                <p className="preview-card-title">Men</p>
              </div>
            </div>
            <div className="preview-card style1">
              <div className="style1-group">
                <img
                  className="preview-card-image"
                  src={productRectangle1}
                  alt="product"
                />
                <p className="preview-card-title">Men</p>
              </div>
            </div>
            <div className="preview-card style1">
              <div className="style1-group">
                <img
                  className="preview-card-image"
                  src={productRectangle1}
                  alt="product"
                />
                <p className="preview-card-title">Men</p>
              </div>
            </div>
          </div>
          <div className="center-preview">
            <div className="center-img-container">
              <img src={homepg_centre} alt="home-centre" />
            </div>
          </div>
          <div className="bottom-preview">
            <div className="bottom-container">
              <div className="bottom-container-card">
                <img src={image_1} alt="product" />
                <div className="card-context">
                  <p className="card-badge">New Arival</p>
                  <div className="card-details">
                    <p className="card-title fw-semiBold fs-M">
                      Summer Collection
                    </p>
                    <p className="card-product-summary">
                      Check out our best winter collection to stay warm in style
                      this season
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-container">
              <div className="bottom-container-card">
                <img src={image_1} alt="product" />
                <div className="card-context">
                  <p className="card-badge">New Arival</p>
                  <div className="card-details">
                    <p className="card-title fw-semiBold fs-M">
                      Summer Collection
                    </p>
                    <p className="card-product-summary">
                      Check out our best winter collection to stay warm in style
                      this season
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ................PAGE CONTENT ............................... --> */}
        {/* <!-- ................FOOTER ............................... --> */}
        <footer className="homeFooter">
          <div className="footerContent">
            <a
              href="https://github.com/AurobindoGupta"
              className="footerLinks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p title="Github">Made By:</p>
            </a>

            <a
              href="https://www.linkedin.com/in/aurobindo-gupta/"
              className="footerLinks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p title="LinkedIn">AurobindoGupta</p>
            </a>
          </div>
        </footer>
        {/* <!-- ................FOOTER ............................... --> */}
      </div>
      {/* <!-- ................BASE CONTAINER............. --> */}
    </div>
  );
};
export default HomePg;
