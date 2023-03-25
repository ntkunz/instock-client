import "./WarehouseDetails.scss";
import editIconWhite from "../../assets/icons/edit-24px-white.svg";
import { Link } from "react-router-dom";
import arrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import arrowRight from "../../assets/icons/chevron_right-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function WarehouseDetails() {
  const api = "http://localhost:8080";
  const { warehouseId } = useParams();
  const [warehouse, setWarehouse] = useState({});
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    getSingleWarehouse(warehouseId);
  }, []);

  function getSingleWarehouse(warehouseId) {
    axios
      .get(`${api}/warehouses/${warehouseId}`)
      .then((response) => {
        setWarehouse(response.data);
        console.log("response data: ", response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getInventoryList(warehouseId);
  }, []);

  function getInventoryList(warehouseId) {
    axios
      .get(`${api}/warehouses/${warehouseId}/inventories`)
      .then((response) => {
        setInventory(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (!Object.keys(warehouse).length) return;

  return (
    <section className="warehouse">
      <div className="warehouse__header">
        <div className="warehouse__header-wrapper">
          <Link to="/warehouses">
            <img src={arrowBackIcon} alt="arrow back" />
          </Link>
          <h1>{warehouse.warehouse_name}</h1>
        </div>

        {/* TO DO: ADD ROUTE TO EDIT BUTTON*/}

        <Link className="warehouse__edit-button" to="#">
          <img src={editIconWhite} alt="edit icon" />
          <h3 className="warehouse__edit-button-caption">Edit</h3>
        </Link>
      </div>

      <div className="warehouse-info">
        <div className="warehouse-info__address-wrapper">
          <h4 className="warehouse__sub-heading">Warehouse Address:</h4>
          <div>
            <p className="warehouse-info__address">
              {warehouse.address}
              {", "}
            </p>
            <p className="warehouse-info__address">{warehouse.city}</p>
          </div>
        </div>
        <div className="warehouse-info__contact">
          <div className="warehouse-info__contact-wrapper">
            <h4 className="warehouse__sub-heading">Contact Name:</h4>
            <p>{warehouse.contact_name}</p>
            <p>{warehouse.contact_position}</p>
          </div>
          <div className="warehouse-info__contact warehouse-info__contact--right">
            <div>
              <h4 className="warehouse__sub-heading">Contact Information:</h4>
              <p>{warehouse.contact_phone}</p>
              <p>{warehouse.contact_email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="table">
        <div className="table__headings">
          <div className="table__heading-wrapper">
            <h4 className="table__heading">Inventory Item</h4>
            <button className="table__heading-button">
              <img
                className="table__heading-icon"
                src={sortIcon}
                alt="sort icon"
              />
            </button>
          </div>
          <div className="table__heading-wrapper">
            <h4 className="table__heading">Category</h4>
            <button className="table__heading-button">
              <img
                className="table__heading-icon"
                src={sortIcon}
                alt="sort icon"
              />
            </button>
          </div>
          <div className="table__heading-wrapper">
            <h4 className="table__heading">Status</h4>
            <button className="table__heading-button">
              <img
                className="table__heading-icon"
                src={sortIcon}
                alt="sort icon"
              />
            </button>
          </div>
          <div className="table__heading-wrapper">
            <h4 className="table__heading">Quantity</h4>
            <button className="table__heading-button">
              <img
                className="table__heading-icon"
                src={sortIcon}
                alt="sort icon"
              />
            </button>
          </div>
          <div className="table__heading-wrapper table__heading-wrapper--actions">
            <h4 className="table__heading">Actions</h4>
          </div>
        </div>

        <ul className="table__list">
          {inventory.map((item) => {
            return (
              <li key={item.id} className="table__list-item">
                <div className="table__list-divider">
                  <div className="table__list-container">
                    <div className="table__list-wrapper">
                      <h4 className="table__heading table__heading--mobile">
                        Inventory Item
                      </h4>
                      <Link className="link" to="/inventory/:inventoryId">
                        {item.item_name}
                        <img className="arrow-right" src={arrowRight} alt="" />
                      </Link>
                    </div>
                    <div className="table__list-wrapper">
                      <h4 className="table__heading table__heading--mobile">
                        Category
                      </h4>
                      <p className="table__text">{item.category}</p>
                    </div>
                  </div>

                  <div className="table__list-container">
                    <div className="table__list-wrapper">
                      <h4 className="table__heading table__heading--mobile">
                        Status
                      </h4>
                      <p
                        className={
                          "table__tag" +
                          (item.quantity === 0 ? " table__tag--out" : "")
                        }
                      >
                        {item.status}
                      </p>
                    </div>
                    <div className="table__list-wrapper">
                      <h4 className="table__heading table__heading--mobile">
                        QTY
                      </h4>
                      <p className="table__text">{item.quantity}</p>
                    </div>
                  </div>
                </div>
                <div className="table__icons">
                  <img
                    className="table__icon"
                    src={deleteIcon}
                    alt="delete icon"
                  />
                  <img className="table__icon" src={editIcon} alt="edit icon" />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default WarehouseDetails;
