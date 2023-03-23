import "./ContactDetails.scss";

function ItemDetails() {
    return (
        <div className="details">
            <h2 className="details__title">Item Details</h2>
            <label htmlFor="name" className="details__name">Item Name
                <input type="text" className="details__name-input" />
            </label>
            <label htmlFor="desc" className="details__desc">Description
                <input type="text" className="details__desc-input" />
            </label>
            <label htmlFor="" className="details__category">Category
                <inpup className="details__category-input"></inpup>
            </label>
        </div>
    )
}

export default ItemDetails;