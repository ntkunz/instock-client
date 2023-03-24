import React from "react";
import "./WarehouseList.scss";
import deleteicon from "../../assets/icons/delete_outline-24px.svg";
import editicon from "../../assets/icons/edit-24px.svg";
import rightArrow from "../../assets/icons/chevron_right-24px.svg";
import sorticon from "../../assets/icons/sort-24px.svg";
export default function WarehouseList() {
  return (
    <section className="warehouseList">
      <div className="warehouseList__box">
        <div className="warehouseList__search">
          <h1 className="warehouseList__title">Warehouses</h1>
          <form className="warehouseList__form">
            <input
              id="search"
              className="warehouseList__text"
              type="text"
              placeholder="Search..."
              name="searchBar"
            />

            <button className="warehouseList__btn" link="warehouses/add">
              + Add New Warehouse
            </button>
          </form>
        </div>
      </div>

      <ul className="warehouseList__list">
        <li className="warehouseList__items">
          <div className="warehouseList__list--tablet">
            <p className="warehouseList__tablet">
              warehouse{" "}
              <img
                className="warehouseList__sort"
                src={sorticon}
                alt="sort icon"
              />
            </p>
            <p className="warehouseList__tablet">
              address{" "}
              <img
                className="warehouseList__sort"
                src={sorticon}
                alt="sort icon"
              />
            </p>
            <p className="warehouseList__tablet">
              contact name{" "}
              <img
                className="warehouseList__sort"
                src={sorticon}
                alt="sort icon"
              />
            </p>
            <p className="warehouseList__tablet">
              contact information
              <img
                className="warehouseList__sort"
                src={sorticon}
                alt="sort icon"
              />
            </p>

            <p className="warehouseList__tablet">actions</p>
          </div>

          <div className="warehouseList__container">
            <div className="warehouseList__item">
              <div className="warehouseList__subtitle">warehouse</div>
              <div className="warehouseList__info">
                <a
                  className="warehouseList__link"
                  href="warehouses/:warehouseId"
                >
                  Manhattan
                </a>

                <img
                  className="warehouseList__icon"
                  src={rightArrow}
                  alt="arrow pointing right"
                />
              </div>
            </div>
            <div className="warehouseList__item">
              <div className="warehouseList__subtitle">address</div>
              <div className="warehouseList__info">
                <p>503 Broadway,</p>
                <p> New york, USA</p>
              </div>
            </div>

            <div className="warehouseList__item">
              <div className="warehouseList__subtitle">contact name</div>
              <div className="warehouseList__info">Parmin Aujla</div>
            </div>
            <div className="warehouseList__item">
              <div className="warehouseList__subtitle">contact information</div>
              <div className="warehouseList__info">+1 (629) 555-0129</div>
              <div className="warehouseList__info">paujla@instock.com</div>
            </div>
            <div className="warehouseList__item warehouseList__item--last">
              <div className="warehouseList__delete">
                <img src={deleteicon} alt="delete icon" />
              </div>
              <div className="warehouseList__edit">
                <img src={editicon} alt="edit icon" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
