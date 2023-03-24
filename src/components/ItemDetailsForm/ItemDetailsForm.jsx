import "./ItemDetailsForm.scss";

function ItemDetailsForm({ inventories }) {
	return (
		<div className="details">
			<h2 className="details__title">Item Details</h2>
			<label htmlFor="name" className="details__label">
				Item Name
			</label>
			<input
				type="text"
				className="details__input"
				// value={state.itemName}
				// onChange={ handleChange }
				placeholder="Item Name"
			/>
			<label htmlFor="desc" className="details__label">
				Description
			</label>
			<textarea
				type="text"
				className="details__desc-input"
				// value={state.desc}
				// onChange={ handleChange }
				placeholder="Please enter a brief item description..."
			/>
			<label htmlFor="" className="details__label">
				Category
			</label>
			<div className="details__select-wrap">
				<select
					className="details__select"
					name="details_item"
					id="details_item"
					// placeholder="Please select"
				>
					<option className="details__placeholder" value="" readOnly>
						Please select
					</option>
					{inventories.map((inventory) => (
						<option key={inventory.id} value={inventory.id}>
							{inventory.category}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default ItemDetailsForm;
