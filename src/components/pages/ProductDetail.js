import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Navigation from "../Navigation";
import PrimaryNav from "../PrimaryNav";
import Product from "../Products/Product";

function ProductDetail(props) {
  const [product, setProduct] = useState([]);
  const location = useLocation();
  const prodID = location.state.data;
  const prodUrl = "https://fakestoreapi.com/products/" + prodID;
  const fetchProduct = async () => {
    const response = await axios.get(prodUrl);
    setProduct(response.data);
  };
  
  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navigation />
      <PrimaryNav />
      <Product ProductData={product} />
    </>
  );
}

export default ProductDetail;
