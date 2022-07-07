import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateNewProduct from "./components/createproduct/CreateNewProduct";
import EditProduct from "./components/createproduct/EditProduct";
import Home from "./components/createproduct/Index";
import ChangesCreated from "./components/popupModals/ChangesCreated";
import DelProduct from "./components/popupModals/DelProduct";
import ProductModal from "./components/popupModals/ProductModal";
import SaveChanges from "./components/popupModals/SaveChanges";
import Welcome from "./components/popupModals/Welcome";

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
      <Route path="/changescreated" element={<ChangesCreated />} />
      <Route path="/delproduct" element={<DelProduct />} />
      <Route path="/productmodal" element={<ProductModal />} />
    </Routes>
  );
};

export default App;
