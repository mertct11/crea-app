import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login, ProductList, ProductDetail } from "@/screens";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product-detail" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};
export default App;
