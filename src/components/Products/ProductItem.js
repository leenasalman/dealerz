import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ProductItem(props) {
  const [prod, setProd] = useState([]);
  const navigate = useNavigate();
  const saveProductId = (prodID) => {
    navigate("/product-detail", { state: { data: prodID } });
  };
  useEffect(() => {
    setProd(props.prod);
  }, [props.prod]);
  return (
    <>
      <div key={Math.random() + "__" + prod.id} className="product-card">
        <div className="product-card__image">
          <img src={prod.image} alt={prod.title} />
        </div>
        <div className="product-card__body">
          <p className="product-card__subtitle">{prod.category}</p>
          <h5 className="product-card__title">{prod.title}</h5>
          <a
            onClick={()=>{saveProductId(prod.id)}}
            className="btn product-card__btn"
          >
            <i className="fa fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
