import React, { useEffect } from "react";

function ProductList() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);
  return <div>ProductList</div>;
}

export default ProductList;
