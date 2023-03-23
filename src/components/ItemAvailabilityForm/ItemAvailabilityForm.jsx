import "./ItemAvailabilityForm.scss";

function ItemAvailabilityForm() {
    return (
        <div className="avail">
            <h2 className="avail__title">Item Availability</h2>
            <label htmlFor="name" className="avail__label">Status</label>
            {/* <fieldset className="avail__status"> */}
            <div className="avail__radio-container">
                <div className="avail__radio-set">
                  <input className="avail__radio" type="radio" id="instock" name="instock" value="huey" checked />
                  <label className="avail__radio-label" for="instock">In stock</label>
                </div>
                <div className="avail__radio-set">
                  <input className="avail__radio" type="radio" id="outofstock" name="instock" value="outofstock" />
                  <label className="avail__radio-label out-of-stock" for="outofstock">Out of stock</label>
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
                >
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                </select>
        </div>
    )
}

export default ItemAvailabilityForm;