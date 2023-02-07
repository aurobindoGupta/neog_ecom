import "./homePg.css";
import homepg_centre from "../../utils/images/homepg_centre.webp";
import image_1 from "../../utils/images/image_1.webp";
import NavBar from "../../Components/navbar/NavBar";
import {default as BottomCard} from "../../Components/bottom_card/Bottom_Card";
import { default as TopCard } from "../../Components/top_card/Top_Card";

const HomePg = () => {
  return (
    <div className="homePg">
      {/* <!-- ................BASE CONTAINER............. --> */}
      <div className="baseContainer">
        {/* <!-- ................NAV BAR............. --> */}
        <NavBar />
        {/* <!-- ................NAV BAR............. --> */}
        {/* <!-- ................PAGE CONTENT ............................... --> */}

        <div className="pageContent">
          <div className="top-preview">
            <TopCard />
            <TopCard />
            <TopCard />
            <TopCard />
            <TopCard />
          </div>
          <div className="center-preview">
            <div className="center-img-container">
              <img src={homepg_centre} alt="home-centre" />
            </div>
          </div>
          <div className="bottom-preview">
            <div className="bottom-container">
              <BottomCard
                pic={image_1}
                cardBadge="New Arival"
                cardTitle="Summer Collection"
                cardProductSummary=" Check out our best Summer collection to stay warm in style this season."
              />
            </div>
            <div className="bottom-container">
              <BottomCard
                pic={image_1}
                cardBadge="New Arival"
                cardTitle="Winter Collection"
                cardProductSummary=" Check out our best winter collection to stay warm in style this season."
              />
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
