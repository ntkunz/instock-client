import "./ItemAvailabilityForm.scss";

function ItemAvailabilityForm() {
    return (
        <div className="avail">
            <h2 className="avail__title">Item avail</h2>
            <label htmlFor="name" className="avail__label">Item Name</label>
            <input 
                type="text" 
                className="avail__input" 
                // value={state.itemName}
                // onChange={ handleChange }
                placeholder="Item Name"
            />
            <label htmlFor="desc" className="avail__label">Description</label>
            <textarea 
                type="text" 
                className="avail__desc-input" 
                // value={state.desc}
                // onChange={ handleChange }
                placeholder="Please enter a brief item description..." 
            />
            <label htmlFor="" className="avail__label">Category</label>
            <input 
                type="text" 
                className="avail__input" 
                // value={state.category}
                // onChange={ handleChange }
                placeholder="Item Name"
            />
        </div>
    )
}

export default ItemAvailabilityForm;