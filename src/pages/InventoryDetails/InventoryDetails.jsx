import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import editicon from "../../assets/icons/edit-24px-white.svg";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import "./InventoryDetails.scss";

export const api = process.env.REACT_APP_API_URL;

export default function InventoryDetails() {
  const { inventoryId } = useParams();
  const navigate = useNavigate();
  const [inventoryItem, setInventoryItem] = useState({});

  useEffect(() => {
    axios.get(`${api}/inventories/${inventoryId}`).then(({ data }) => {
      setInventoryItem(data);
      console.log(data);
    });
  }, [inventoryId]);

  const { item_name, description, category, status, quantity, warehouse_name } =
    inventoryItem;
  return (
    <>
      <section className="inventoryDetails">
        <div className="inventoryDetails__header">
          <div className="inventoryDetails__left">
            <div className="inventoryDetails__box">
              <Link to="/inventory">
                <img
                  className="inventoryDetails__arrow"
                  src={arrowBack}
                  alt="arrow pointing back"
                />
              </Link>
              <h1 className="inventoryDetails__name">{item_name}</h1>
            </div>
            <div className="inventoryDetails__right">
              <Link
                className="inventoryDetails__edit-button"
                to={`/inventory/edit/${inventoryId}`}
              >
                <img
                  className="inventoryDetails__edit"
                  src={editicon}
                  alt="edit icon"
                />
                <h3 className="inventoryDetails__edit-button-caption">Edit</h3>
              </Link>
            </div>
          </div>
        </div>

        <div className="inventoryDetails__description">
          <div className="inventoryDetails__container">
            <div className="inventoryDetails__category">
              <div className="inventoryDetails__info">
                <p className="inventoryDetails__subtitle">Item Description:</p>
                <p className="inventoryDetails__text">{description}</p>
              </div>

              <div className="inventoryDetails__info">
                <p className="inventoryDetails__subtitle">Category:</p>
                <p className="inventoryDetails__text">{category}</p>
              </div>
            </div>

            <div className="inventoryDetails__square">
              <div className="inventoryDetails__wrapper">
                <div className="inventoryDetails__box2">
                  <p className="inventoryDetails__subtitle">Status:</p>
                  <p className="inventoryDetails__text inventoryDetails__status">
                    {status}
                  </p>
                </div>
                <div className="inventoryDetails__info3">
                  <p className="inventoryDetails__subtitle">Quantity:</p>
                  <p className="inventoryDetails__text">{quantity}</p>
                </div>
              </div>
              <div className="inventoryDetails__info2">
                <p className="inventoryDetails__subtitle">Warehouse</p>
                <p className="inventoryDetails__text">{warehouse_name}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
