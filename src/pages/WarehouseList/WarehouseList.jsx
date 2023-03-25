import React from "react";
import "./WarehouseList.scss";
import deleteicon from "../../assets/icons/delete_outline-24px.svg";
import editicon from "../../assets/icons/edit-24px.svg";
import rightArrow from "../../assets/icons/chevron_right-24px.svg";
import sorticon from "../../assets/icons/sort-24px.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const api = process.env.REACT_APP_API_URL;

export default function WarehouseList() {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    getWarehouses();
  }, []);

  function getWarehouses() {
    console.log(process.env);
    axios
      .get(`${api}/warehouses`)
      .then((response) => {
        setWarehouses(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

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

            <Link className="warehouseList__btn" to={"/warehouses/add"}>
              + Add New Warehouse
            </Link>
          </form>
        </div>
      </div>
      <div className="warehouseList__list--tablet">
        <p className="warehouseList__tablet">
          warehouse{" "}
          <img className="warehouseList__sort" src={sorticon} alt="sort icon" />
        </p>
        <p className="warehouseList__tablet">
          address{" "}
          <img className="warehouseList__sort" src={sorticon} alt="sort icon" />
        </p>
        <p className="warehouseList__tablet">
          contact name{" "}
          <img className="warehouseList__sort" src={sorticon} alt="sort icon" />
        </p>
        <p className="warehouseList__tablet">
          contact information
          <img className="warehouseList__sort" src={sorticon} alt="sort icon" />
        </p>

        <p className="warehouseList__tablet">actions</p>
      </div>
      {warehouses.map((warehouse) => (
        <ul className="warehouseList__list" key={warehouse.id}>
          <li className="warehouseList__items">
            <div className="warehouseList__container">
              <div className="warehouseList__item">
                <div className="warehouseList__subtitle">warehouse</div>
                <div className="warehouseList__info">
                  <Link className="warehouseList__link" to={`${warehouse.id}`}>
                    {warehouse.warehouse_name}
                    <img
                      className="warehouseList__icon"
                      src={rightArrow}
                      alt="arrow pointing right"
                    />
                  </Link>
                </div>
              </div>
              <div className="warehouseList__item">
                <div className="warehouseList__subtitle">address</div>
                <div className="warehouseList__info">
                  <p>{warehouse.address + ", "}</p>
                  <p>{warehouse.city + ", " + warehouse.country}</p>
                </div>
              </div>

              <div className="warehouseList__item">
                <div className="warehouseList__subtitle">contact name</div>
                <div className="warehouseList__info">
                  {warehouse.contact_name}
                </div>
              </div>
              <div className="warehouseList__item">
                <div className="warehouseList__subtitle">
                  contact information
                </div>
                <div className="warehouseList__info">
                  {warehouse.contact_phone}
                </div>
                <div className="warehouseList__info">
                  {warehouse.contact_email}
                </div>
              </div>
              <div className="warehouseList__item warehouseList__item--last">
                <div className="warehouseList__delete">
                  <img src={deleteicon} alt="delete icon" />
                </div>
                <Link to={`/warehouses/edit/${warehouse.id}`}>
                  <div className="warehouseList__edit">
                    <img src={editicon} alt="edit icon" />
                  </div>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      ))}
    </section>
  );
}
