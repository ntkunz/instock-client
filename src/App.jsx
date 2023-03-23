import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import AddNewInventoryItem from "./components/AddNewInventoryItem/AddNewInventoryItem";
// import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse";
// import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
// import ContactDetails from "./components/ContactDetails/ContactDetails";
import Footer from "./components/Footer/Footer";
import AddNewWarehouseForm from "./components/AddNewWarehouseForm/AddNewWarehouseForm";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <AddNewInventoryItem />
      <Footer />
        {/* <Routes>
          <Route path="/" element={<WarehouseList />} />
          <Route path="/warehouses" element={<WarehouseList />} />
          <Route path="warehouses/edit" element={<EditWarehouse />} />
          <Route path="warehouses/add" element={<AddWarehouse />} />
          <Route path="inventory/edit" element={<EditInventory />} />
          <Route
            path="warehouses/:warehouseId"
            element={<WarehouseDetails />}
          />
          <Route path="/inventory" element={<InventoryList />} />
          <Route path="inventory/add" element={<AddInventory />} />
          <Route
            path="/inventory/:inventoryId"
            element={<InventoryDetails />}
          />
          <Route path="inventory/edit" element={<EditInventory />} />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}
