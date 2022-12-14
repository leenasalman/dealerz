import './App.css';
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import ProductDetail from "./components/pages/ProductDetail";
import Gallery from "./components/pages/Gallery";
import Cart from "./components/pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/product-detail" element={<ProductDetail />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
