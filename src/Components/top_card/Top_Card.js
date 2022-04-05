import { useNavigate } from "react-router-dom";
import productRectangle1 from "../../utils/images/productRectangle1.png";
import "./top_card.css";
const Top_Card = () => {
    let navigate = useNavigate();
  return (
    <div className="preview-card style1">
      <div className="style1-group" onClick={()=>navigate("/productPg")}>
        <img
          className="preview-card-image"
          src={productRectangle1}
          alt="product"
        />
        <p className="preview-card-title">Men</p>
      </div>
    </div>
  );
};
export default Top_Card;
