import "./WarehouseInventoryList.scss";
import axios from "axios";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import arrowRight from "../../assets/icons/chevron_right-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteModal from "../DeleteModal/DeleteModal";

function WarehouseInventoryList() {
  const { warehouseId } = useParams();
  const [inventory, setInventory] = useState([]);
  const [deleteModalInfo, setDeleteModalInfo] = useState({});

  const api = process.env.REACT_APP_BASEURL;
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

  function deleteInventoryItem(id) {
    axios
      .delete(`${api}/inventories/${id}`)
      .then((response) => {
        getInventoryList(warehouseId);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteButtonClick(item) {
    const info = {
      itemId: item.id,
      title: `Delete ${item.item_name} inventory item?`,
      text: `Please confirm that you’d like to delete ${item.item_name} from the inventory
      list. You won’t be able to undo this action.`,
    };

    setDeleteModalInfo(info);
  }

  function onDeleteDialogCancel() {
    setDeleteModalInfo({});
  }

  function onDeleteDialogConfirm(id) {
    deleteInventoryItem(id);
    setDeleteModalInfo({});
  }

  return (
    <div className="warehouse-table">
      <DeleteModal
        deleteModalInfo={deleteModalInfo}
        onCancel={onDeleteDialogCancel}
        onConfirm={onDeleteDialogConfirm}
      />

      <div className="warehouse-table__headings">
        <div className="warehouse-table__heading-wrapper">
          <h4 className="warehouse-table__heading">Inventory Item</h4>
          <button className="warehouse-table__heading-button">
            <img
              className="warehouse-table__heading-icon"
              src={sortIcon}
              alt="sort icon"
            />
          </button>
        </div>
        <div className="warehouse-table__heading-wrapper">
          <h4 className="warehouse-table__heading">Category</h4>
          <button className="warehouse-table__heading-button">
            <img
              className="warehouse-table__heading-icon"
              src={sortIcon}
              alt="sort icon"
            />
          </button>
        </div>
        <div className="warehouse-table__heading-wrapper">
          <h4 className="warehouse-table__heading">Status</h4>
          <button className="warehouse-table__heading-button">
            <img
              className="warehouse-table__heading-icon"
              src={sortIcon}
              alt="sort icon"
            />
          </button>
        </div>
        <div className="warehouse-table__heading-wrapper">
          <h4 className="warehouse-table__heading">Quantity</h4>
          <button className="warehouse-table__heading-button">
            <img
              className="warehouse-table__heading-icon"
              src={sortIcon}
              alt="sort icon"
            />
          </button>
        </div>
        <div className="warehouse-table__heading-wrapper warehouse-table__heading-wrapper--actions">
          <h4 className="warehouse-table__heading">Actions</h4>
        </div>
      </div>

      <ul className="warehouse-table__list">
        {inventory.map((item) => {
          return (
            <li key={item.id} className="warehouse-table__list-item">
              <div className="warehouse-table__list-divider">
                <div className="warehouse-table__list-container">
                  <div className="warehouse-table__list-wrapper">
                    <h4 className="warehouse-table__heading warehouse-table__heading--mobile">
                      Inventory Item
                    </h4>
                    <Link
                      className="warehouse-table__link-item"
                      to={`/inventory/${item.id}`}
                    >
                      {item.item_name}
                      <img
                        className="warehouse-table__link-arrow"
                        src={arrowRight}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="warehouse-table__list-wrapper">
                    <h4 className="warehouse-table__heading warehouse-table__heading--mobile">
                      Category
                    </h4>
                    <p className="warehouse-table__text">{item.category}</p>
                  </div>
                </div>

                <div className="warehouse-table__list-container">
                  <div className="warehouse-table__list-wrapper">
                    <h4 className="warehouse-table__heading warehouse-table__heading--mobile">
                      Status
                    </h4>
                    <p
                      className={
                        "warehouse-table__tag" +
                        (item.quantity === 0
                          ? " warehouse-table__tag--out"
                          : "")
                      }
                    >
                      {item.status}
                    </p>
                  </div>
                  <div className="warehouse-table__list-wrapper">
                    <h4 className="warehouse-table__heading warehouse-table__heading--mobile">
                      QTY
                    </h4>
                    <p className="warehouse-table__text">{item.quantity}</p>
                  </div>
                </div>
              </div>
              <div className="warehouse-table__icons">
                <img
                  className="warehouse-table__icon"
                  src={deleteIcon}
                  alt="delete icon"
                  onClick={() => deleteButtonClick(item)}
                />
                <Link to={`/inventory/edit/${item.id}`}>
                  <img
                    className="warehouse-table__icon"
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
  );
}

export default WarehouseInventoryList;
