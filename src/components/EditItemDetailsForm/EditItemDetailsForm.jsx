import "./EditItemDetailsForm.scss";

function EditItemDetailsForm({ inventoryItem, categoryArray, inventories, handleOnChange, inputValues }) {
	return (
		<div className="details">
			<h2 className="details__title">Edit Item Details</h2>
			<label htmlFor="name" className="details__label">
				Item Name
			</label>
			<input
				type="text"
				className="details__input"
				name="itemName"
				value={inputValues.itemName}
				onChange={handleOnChange}
				placeholder="Item Name"
			/>
			<label htmlFor="desc" className="details__label">
				Description
			</label>
			<textarea
				type="text"
				className="details__desc-input"
				name="desc"
				value={inputValues.desc}
				onChange={ handleOnChange }
				placeholder="Please enter a brief item description..."
			/>
			<label htmlFor="" className="details__label">
				Category
			</label>
			<div className="details__select-wrap">
				<select
					className="details__select"
					name="category"
					id="details_select"
					onChange={ handleOnChange }
					value={inputValues.category}
				>
					<option className="details__placeholder" value={inventoryItem.category} >
						{inventoryItem.category}
					</option>
					{categoryArray.map((inventory) => (
						<option
							key={inventory}
							value={inventory}
							// value={inventory.category}
						>
							{inventory}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default EditItemDetailsForm;
