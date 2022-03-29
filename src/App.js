import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Orders from "./Pages/Orders/Orders";
import Login from "./Pages/Profile/Login";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Register from "./Pages/Profile/Register";
import Forget from "./Pages/Profile/Forget";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} exact />
        <Route path="/home" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget" element={<Forget />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
