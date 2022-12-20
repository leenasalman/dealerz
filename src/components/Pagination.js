import React, { useEffect, useState } from "react";
import "./Pagination.css";

function Pagination(props) {
  const [product, setProduct] = useState({
    category: "",
    title: "",
  });
  useEffect(() => {
    setProduct({ category: props.ProductCat, title: props.ProductTitle });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="row">
        <div className="col">
          {product ? (
            <p>{props.ProductCat + ">" + props.ProductTitle}</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Pagination;
