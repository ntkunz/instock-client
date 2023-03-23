import "./ItemDetailsForm.scss";

function ItemDetailsForm() {
    return (
        <div className="details">
            <h2 className="details__title">Item Details</h2>
            <label htmlFor="name" className="details__label">Item Name</label>
            <input type="text" className="details__input" />
            <label htmlFor="desc" className="details__label">Description</label>
            <textarea type="text" className="details__desc-input" />
            <label htmlFor="" className="details__label">Category</label>
            <input className="details__input" />
        </div>
    )
}

export default ItemDetailsForm;