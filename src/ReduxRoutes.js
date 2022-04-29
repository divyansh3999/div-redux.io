import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductComponent from "./containers/ProductComponent";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import PrivateRoutes from "./PrivateRoutes";
import Layout from "./Layout";

const ReduxRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<PrivateRoutes />}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
              <Route path="/" element={<ProductListing />}></Route>
              <Route
                path="/product-component"
                element={<ProductComponent />}
              ></Route>
              <Route
                path="/product/:productId"
                element={<ProductDetail />}
              ></Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default ReduxRoutes;
