import { useNavigate } from "react-router-dom";
import productRectangle1 from "../../utils/images/productRectangle1.webp";
import "./top_card.css";
const Top_Card = ({ data = "men" }) => {
  let navigate = useNavigate();


  return (
    <div className="preview-card style1">
      <div className="style1-group" onClick={() => navigate("/productPg", {state:{categoryName: data}})}>
        <img
          className="preview-card-image"
          src={productRectangle1}
          alt="product"
        />
        <p className="preview-card-title">{data}</p>
      </div>
    </div>
  );
};
export default Top_Card;
