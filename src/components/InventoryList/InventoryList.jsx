import "./InventoryList.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import arrowRight from "../../assets/icons/chevron_right-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";

function InventoryList() {
  const api = process.env.REACT_APP_API_URL;
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    getInventoryList();
  }, []);

  function getInventoryList() {
    axios
      .get(`${api}/inventories`)
      .then((response) => {
        setInventory(response.data);
        console.log("response data: ", response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <section className="InventoryList">
      <div className="InventoryList__box">
        <div className="InventoryList__search">
          <h1 className="InventoryList__title">Inventory</h1>
          <form className="InventoryList__form">
            <input
              id="search"
              className="InventoryList__text"
              type="text"
              placeholder="Search..."
              name="searchBar"
            />

            <Link className="InventoryList__btn" to={"/inventory/add"}>
              + Add New Inventory
            </Link>
          </form>
        </div>
      </div>
      <div className="inventory-table">
        <div className="inventory-table__headings">
          <div className="inventory-table__heading-wrapper">
            <h4 className="inventory-table__heading">Inventory Item</h4>
            <button className="inventory-table__heading-button">
              <img
                className="inventory-table__heading-icon"
                src={sortIcon}
                alt="sort icon"
              />
            </button>
          </div>
          <div className="inventory-table__heading-wrapper">
            <h4 className="inventory-table__heading">Category</h4>
            <button className="inventory-table__heading-button">
              <img
                className="inventory-table__heading-icon"
                src={sortIcon}
                alt="sort icon"
              />
            </button>
          </div>
          <div className="inventory-table__heading-wrapper">
            <h4 className="inventory-table__heading">Status</h4>
            <button className="inventory-table__heading-button">
              <img
                className="inventory-table__heading-icon"
                src={sortIcon}
                alt="sort icon"
              />
            </button>
          </div>
          <div className="inventory-table__heading-wrapper">
            <h4 className="inventory-table__heading">Quantity</h4>
            <button className="inventory-table__heading-button">
              <img
                className="inventory-table__heading-icon"
                src={sortIcon}
                alt="sort icon"
              />
            </button>
          </div>
          <div className="inventory-table__heading-wrapper">
            <h4 className="inventory-table__heading">Warehouse</h4>
            <button className="inventory-table__heading-button">
              <img
                className="inventory-table__heading-icon"
                src={sortIcon}
                alt="sort icon"
              />
            </button>
          </div>
          <div className="inventory-table__heading-wrapper inventory-table__heading-wrapper--actions">
            <h4 className="inventory-table__heading">Actions</h4>
          </div>
        </div>

        <ul className="inventory-table__list">
          {inventory.map((item) => {
            return (
              <li key={item.id} className="inventory-table__list-item">
                <div className="inventory-table__list-divider">
                  <div className="inventory-table__list-container inventory-table__list-container--left">
                    <div className="inventory-table__list-wrapper">
                      <h4 className="inventory-table__heading inventory-table__heading--mobile">
                        Inventory Item
                      </h4>
                      <Link
                        className="inventory-table__link-item"
                        to={`/inventory/${item.id}`}
                      >
                        {item.item_name}
                        <img
                          className="inventory-table__link-arrow"
                          src={arrowRight}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="inventory-table__list-wrapper">
                      <h4 className="inventory-table__heading inventory-table__heading--mobile">
                        Category
                      </h4>
                      <p className="inventory-table__text">{item.category}</p>
                    </div>
                  </div>

                  <div className="inventory-table__list-container inventory-table__list-container--right">
                    <div className="inventory-table__list-wrapper">
                      <h4 className="inventory-table__heading inventory-table__heading--mobile">
                        Status
                      </h4>
                      <p
                        className={
                          "inventory-table__tag" +
                          (item.quantity === 0
                            ? " inventory-table__tag--out"
                            : "")
                        }
                      >
                        {item.status}
                      </p>
                    </div>
                    <div className="inventory-table__list-wrapper">
                      <h4 className="inventory-table__heading inventory-table__heading--mobile">
                        QTY
                      </h4>
                      <p className="inventory-table__text">{item.quantity}</p>
                    </div>
                    <div className="inventory-table__list-wrapper">
                      <h4 className="inventory-table__heading inventory-table__heading--mobile">
                        Warehouse
                      </h4>
                      <p className="inventory-table__text">
                        {item.warehouse_name}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="inventory-table__icons">
                  <img
                    className="inventory-table__icon"
                    src={deleteIcon}
                    alt="delete icon"
                  />
                  <Link to={`/inventory/edit/${item.id}`}>
                    <img
                      className="inventory-table__icon"
                      src={editIcon}
                      alt="edit icon"
                    />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default InventoryList;
