import "./WarehouseDetails.scss";
import editIconWhite from "../../assets/icons/edit-24px-white.svg";
import { Link } from "react-router-dom";
import arrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import arrowRight from "../../assets/icons/chevron_right-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

function WarehouseDetails() {
  return (
    <section className="warehouse">
      <div className="warehouse__header">
        <div className="warehouse__header-wrapper">
          <Link to="/warehouses">
            <img src={arrowBackIcon} alt="arrow back" />
          </Link>
          <h1>Washington</h1>
        </div>
        <div className="edit-icon">
          <img src={editIconWhite} alt="edit icon" />
        </div>
      </div>
      <div className="table">
        <div className="table__container">
          <div className="table__wrapper">
            <h4 className="table__headers">Warehouse Address</h4>
            <p className="table__text">33 Pearl Street SW, Washington, USA</p>
          </div>
          <div className="table__contact">
            <div className="table__contact-wrapper">
              <h4 className="table__headers">Contact Name</h4>
              <p className="table__text">Graeme Lyon</p>
              <p className="table__text">Warehouse Manager</p>
            </div>
            <div className="table__contact table__contact--right">
              <div>
                <h4 className="table__headers">Contact Information</h4>
                <p className="table__text">+1 (647) 504-0911</p>
                <p className="table__text">glyon@instock.com</p>
              </div>
            </div>
          </div>
        </div>

        <ul className="table__list">
          <li className="table__list-item">
            <div className="table__list-divider">
              <div className="table__list-container">
                <div className="table__list-wrapper">
                  <h4 className="table__headers">Inventory Item</h4>
                  <Link className="link" to="/inventory/:inventoryId">
                    Television{" "}
                    <img className="arrow-right" src={arrowRight} alt="" />
                  </Link>
                </div>
                <div>
                  <h4 className="table__headers">Category</h4>
                  <p className="table__text">Electronics</p>
                </div>
              </div>

              <div className="table__list-container">
                <div className="table__list-wrapper">
                  <h4 className="table__headers">Status</h4>
                  <p className="table__tag table__tag--out">In Stock</p>
                </div>
                <div className="table__list-wrapper">
                  <h4 className="table__headers">QTY</h4>
                  <p className="table__text">500</p>
                </div>
              </div>
            </div>
            <div className="edit__icons">
              <img src={deleteIcon} alt="delete icon" />
              <img src={editIcon} alt="edit icon  " />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default WarehouseDetails;
