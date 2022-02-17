import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./screens/Cart";
import Products from "./screens/Products";
import UserProfile from "./screens/UserProfile";
import Navigation from "./components/patterns/Navigation";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}
