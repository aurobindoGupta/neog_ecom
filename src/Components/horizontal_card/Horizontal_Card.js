import "./horizontal_card.css";

const Horizontal_card = ({ data }) => {
 
  const { productData } = data;
  console.log(productData);
  return (
    <div className="card card-horizontal">
      <div className="card-img-container card-horizontal">
        <img
          className="card-img card-horizontal"
          src={productData.images}
          alt="Card"
        />
      </div>
      <div className="card-details card-horizontal">
        <div className="card-title card-horizontal">
          <p className="title-heading">{productData.title}</p>
          <p className="title-subHeading">{productData.categoryName}</p>
          <div className="price">
            <p className="current-price">{productData.price}</p>
          </div>
          <div className="productQty ">
            <button className="btn btn-secondary qty-sub">-</button>
            <p className="itemQty">1</p>
            <button className="btn btn-secondary qty-add">+</button>
          </div>
        </div>
        <div className="card-button card-horizontal">
          <button className="btn btn-primary button-add card-horizontal">
            Remove from Cart
          </button>
          <button className="btn btn-secondary button-add card-horizontal">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
export default Horizontal_card;
