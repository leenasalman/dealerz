import React from "react";
import ProductList from "../Products/ProductList";
import Navigation from "../Navigation";
import PrimaryNav from "../PrimaryNav";

function Home() {
  return (
    <>
      <Navigation />
      <PrimaryNav />
      <ProductList />
    </>
  );
}

export default Home;
