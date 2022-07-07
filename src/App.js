import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateNewProduct from "./components/createproduct/CreateNewProduct";
import EditProduct from "./components/createproduct/EditProduct";
import Home from "./components/createproduct/Index";
import SaveChanges from "./components/SaveChanges";
import Welcome from "./components/Welcome";
import "./styles/index.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/addproduct" element={<CreateNewProduct />} />
        <Route path="/editproduct" element={<EditProduct />} />
      </Route>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/savechanges" element={<SaveChanges />} />
    </Routes>
  );
};

export default App;
