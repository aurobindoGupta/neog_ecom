
import "./bottom_card.css";

const Bottom_Card = ({pic, cardBadge, cardTitle, cardProductSummary, onClickFn}) => {
  return (
    <>
      <div className="bottom-container-card">
        <img src={pic} alt="product" />
        <div className="card-context">
          <p className="card-badge fs-M fw-bold">{cardBadge}</p>
          <div className="card-details">
            <p className="card-title fw-semiBold fs-M">{cardTitle}</p>
            <p className="card-product-summary">
             {cardProductSummary}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Bottom_Card;
