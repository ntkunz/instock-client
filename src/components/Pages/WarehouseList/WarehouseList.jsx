import React from "react";
import "./WarehouseList.scss";
import deleteicon from "../../../assets/icons/delete_outline-24px.svg";
import editicon from "../../../assets/icons/edit-24px.svg";
export default function WarehouseList() {
  return (
    <section className="warehouseList">
      <h1 className="warehouseList__title">Warehouses</h1>
      <div className="warehouseList__search">
        <form className="warehouseList__form">
          <input
            id="search"
            className="warehouseList__text"
            type="text"
            placeholder="Search"
            name="searchBar"
          />
        </form>
        <button
          className="warehouseList__btn"
          link="warehouses/add">Add New Warehouse</button>
      </div>

      <ul className="warehouseList__list">
        <li class="warehouseList__items">
          <div className="warehouseList__left">
            <div className="warehouseList__warehouse">
              <div className="warehouseList__subtitle">warehouse</div>
              <div className="warehouseList__info warehouseList__arrow">
                <a
                  className="warehouseList__link"
                  href="warehouses/:warehouseId"
                >
                  Manhattan
                </a>
              </div>
            </div>
            <div className="warehouseList__address">
              <div className="warehouseList__subtitle">address</div>
              <div className="warehouseList__info">
                503 Broadway, New york, USA
              </div>
            </div>
          </div>
          <div className="warehouseList__right">
            <div className="warehouseList__name">
              <div className="warehouseList__subtitle">contact name</div>
              <div className="warehouseList__info">Parmin Aujla</div>
            </div>
            <div className="warehouseList__contact">
              <div className="warehouseList__subtitle">contact information</div>
              <div className="warehouseList__info">+1 (629) 555-0129</div>
              <div className="warehouseList__info">paujla@instock.com</div>
            </div>
          </div>
          <div className="warehouseList__icons">
            <div className="warehouseList__delete">
              <img src={deleteicon} alt="delete icon" />
            </div>
            <div className="warehouseList__edit">
              <img src={editicon} alt="edit icon" />
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
