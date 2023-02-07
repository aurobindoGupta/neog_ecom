import { useNavigate } from "react-router-dom";
import "./bottom_card.css";

const Bottom_Card = ({
  pic,
  cardBadge,
  cardTitle,
  cardProductSummary,
  onClickFn,
}) => {
  let navigate = useNavigate();
  return (
    <>
      <div className="bottom-container-card">
        <img src={pic} alt="product" />
        <div className="card-context">
          <p className="card-badge fs-M fw-bold">{cardBadge}</p>
          <div className="card-details">
            <p className="card-title fw-semiBold fs-M">{cardTitle}</p>
            <p className="card-product-summary">{cardProductSummary}</p>
          </div>
          <button className="btn btn-primary btn_bottom_card" onClick={()=>navigate("/productPg")}>Shop</button>
        </div>
      </div>
    </>
  );
};
export default Bottom_Card;
