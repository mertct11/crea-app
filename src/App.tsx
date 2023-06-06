import { Routes, Route, Navigate } from "react-router-dom";
import { Login, ProductList, ProductDetail } from "@/screens";
import "./App.style.scss";
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="*" element={<Navigate to="/products" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product-detail/:slug" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};
export default App;
