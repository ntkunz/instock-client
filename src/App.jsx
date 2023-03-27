
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import WarehouseList from "./pages/WarehouseList/WarehouseList";
import Header from "./components/Header/Header";
import AddInventory from "./pages/AddNewInventoryItem/AddNewInventoryItem";
// import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse";
import EditInventory from "./pages/EditInventory/EditInventory";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
// import ContactDetails from "./components/ContactDetails/ContactDetails";
import WarehouseInventoryList from "./components/WarehouseInventoryList/WarehouseInventoryList";
import Footer from "./components/Footer/Footer";
import AddNewWarehouseForm from "./components/AddNewWarehouseForm/AddNewWarehouseForm";
import EditWarehouseForm from "./components/EditWarehouseForm/EditWarehouseForm";

export default function App() { 

  const [ inventoryPage, setInventoryPage ] = useState([false]);

function checkUrl() {
  if (window.location.href.includes('inventory')) {
    setInventoryPage(true)
    console.log(inventoryPage)
  } else {setInventoryPage(false)}
}

  return (
    <div className="App" onChange={checkUrl}>
      <BrowserRouter>
        <Header inventoryPage={inventoryPage} />
        <Routes >
          <Route path="/" element={<WarehouseList />} />
          <Route path="/warehouses" element={<WarehouseList />} />
          <Route path="/warehouses/edit/:id" element={<EditWarehouseForm />} />
          <Route path="/warehouses/add" element={<AddNewWarehouseForm />} />
          <Route path="inventory/edit/:inventoryId" element={<EditInventory />} />
          <Route path="warehouses/:warehouseId" element={<WarehouseDetails />} />
          <Route path="inventory/add" element={<AddInventory />} />
          <Route path="/:warehouseId" element={<WarehouseInventoryList />} />
          {/* <Route path="/inventory" element={<InventoryList />} /> */}
          {/* <Route path="inventory/add" element={<AddInventory />} /> */}
          {/* <Route
            path="/inventory/:inventoryId"
            element={<InventoryDetails />}
          /> */}
          {/* <Route path="inventory/edit" element={<EditInventory />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
