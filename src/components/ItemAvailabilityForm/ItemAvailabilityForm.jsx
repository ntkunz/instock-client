import "./ItemAvailabilityForm.scss";

function ItemAvailabilityForm({ warehouses }) {

    // if(typeof(warehouses) !== 'undefined') {console.log(warehouses[0])}; //this is the first warehouse's id
    if(warehouses) {console.log(warehouses[0])}; //this is the first warehouse's id
    return (
        <div className="avail">
            <h2 className="avail__title">Item Availability</h2>
            <label htmlFor="name" className="avail__label">Status</label>
            {/* <fieldset className="avail__status"> */}
            <div className="avail__radio-container">
                <div className="avail__radio-set">
                  <input className="avail__radio" type="radio" id="instock" name="instock" value="huey" />
                  <label className="avail__radio-label" htmlFor="instock">In stock</label>
                </div>
                <div className="avail__radio-set">
                  <input className="avail__radio" type="radio" id="outofstock" name="instock" value="outofstock" />
                  <label className="avail__radio-label out-of-stock" htmlFor="outofstock">Out of stock</label>
                </div>
            </div>
            {/* </fieldset> */}
            <label htmlFor="quantity" className="avail__label">Quantity</label>
            <input
                type="text" 
                className="avail__input" 
                // value={state.quantity}
                // onChange={ handleChange }
                placeholder="" 
            />
            <label htmlFor="" className="avail__label">Warehouse</label>
                <select 
                    className="avail__warehouse" 
                    name="avail_warehouse" 
                    id="avail_warehouse"
                    // placeholder="Please select"
                >
                <option className="avail__placeholder" value="" readOnly>Please select</option>
                {warehouses.map((warehouse) =>  (
                    <option key={warehouse.id} value={warehouse.id}>{warehouse.warehouse_name}</option>
                ))}
                </select>
        </div>
    )
}

export default ItemAvailabilityForm;