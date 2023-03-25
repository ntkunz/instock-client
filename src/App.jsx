import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import WarehouseList from "./pages/WarehouseList/WarehouseList";
import Header from "./components/Header/Header";
import AddInventory from "./components/AddNewInventoryItem/AddNewInventoryItem";
// import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse";
import WarehouseDetailsForm from "./components/WarehouseDetailsForm/WarehouseDetailsForm";
// import ContactDetails from "./components/ContactDetails/ContactDetails";
import Footer from "./components/Footer/Footer";
import AddNewWarehouseForm from "./components/AddNewWarehouseForm/AddNewWarehouseForm";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <AddNewWarehouseForm /> */}
        <Routes>
          <Route path="/" element={<WarehouseList />} />
          <Route path="/warehouses" element={<WarehouseList />} />
          {/* <Route path="warehouses/edit/:warehouseId" element={<EditWarehouse />} /> */}
          {/* <Route path="warehouses/add" element={<AddWarehouse />} /> */}
          <Route path="warehouses/add" element={<AddNewWarehouseForm />} />
          {/* <Route path="inventory/edit" element={<EditInventory />} /> */}
          <Route
            path="warehouses/:warehouseId"
            element={<WarehouseDetailsForm />}
          />
          {/* <Route path="/inventory" element={<InventoryList />} /> */}
          <Route path="inventory/add" element={<AddInventory />} />
          <Route
            path="/inventory/:inventoryId"
            // element={<InventoryDetails />}
          />

          {/* <Route path="inventory/edit" element={<EditInventory />} />  */}
        </Routes>
        <Footer />
{/* 
         // <Route path="inventory/edit" element={<EditInventory />} />
     //   </Routes> */}

      </BrowserRouter>
    </div>
  );
}
