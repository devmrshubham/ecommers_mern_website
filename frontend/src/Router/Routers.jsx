import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import CategoryAdd from "../pages/Category/Add";
import CategoryView from "../pages/Category/View";
import ProductAdd from "../pages/Product/Add";
import ProductView from "../pages/Product/View";
import Dashbord from "../Component/Dashbord";
import EditCategory from "../pages/Category/Edit.jsx";
import Login from "../pages/Login/Login";
import Home from "../Component/Website/Home";
import Cart from "../pages/Website/Cart";



const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<Layout />}>
          <Route path="/admin" element={<Dashbord />} />
          <Route path="category/add" element={<CategoryAdd />} />
          <Route path="category/view" element={<CategoryView />} />
          <Route path="category/edit/:id" element={<EditCategory />} />
          <Route path="product/add" element={<ProductAdd />} />
          <Route path="product/view" element={<ProductView />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
