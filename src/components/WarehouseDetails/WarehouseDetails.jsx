import "./WarehouseDetails.scss";

function WarehouseDetails() {
  return (
      <div className="warehouse-details">
        <h2 className="warehouse-details__heading">Warehouse Details</h2>

        <div className="warehouse-details__container">
          <div className="warehouse-details__warehouse">
            <label className="warehouse-details__label">Warehouse Name</label>
            <input
              className="warehouse-details__input"
              placeholder="Warehouse Name"
            />
          </div>

          <div className="warehouse-details__warehouse">
            <label className="warehouse-details__label">Street Address</label>
            <input
              className="warehouse-details__input"
              placeholder="Street Address"
            />
          </div>

          <div className="warehouse-details__warehouse">
            <label className="warehouse-details__label">City</label>
            <input className="warehouse-details__input" placeholder="City" />
          </div>

          <div className="warehouse-details__warehouse">
            <label className="warehouse-details__label">Country</label>
            <input className="warehouse-details__input" placeholder="Country" />
          </div>

        </div>
      </div>
  );
}

export default WarehouseDetails;
