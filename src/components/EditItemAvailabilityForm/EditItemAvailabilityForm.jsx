import "./EditItemAvailabilityForm.scss";

function EditItemAvailabilityForm({ warehouses, handleOnChange, inputValues }) {
	return (
		<div className="avail">
		<h2 className="avail__title">Item Availability</h2>
			<label htmlFor="name" className="avail__label">
				Status
			</label>
			<div className="avail__radio-container">
				<div className="avail__radio-set">
					<input
						className="avail__radio"
						type="radio"
						id="instock"
						name="instock"
						value="In Stock"
						onChange={handleOnChange}
					/>
					<label className="avail__radio-label" htmlFor="instock">
						In stock
					</label>
				</div>
				<div className="avail__radio-set">
					<input
						className="avail__radio"
						type="radio"
						id="outofstock"
						name="instock"
						value="Out of Stock"
						onChange={handleOnChange}
					/>
					<label className="avail__radio-label" htmlFor="outofstock">
						Out of stock
					</label>
				</div>
			</div>
			<div className="avail__quantity-wrap avail__out-of-stock">
				<label htmlFor="quantity" className="avail__label">
					Quantity
				</label>
				<input
					type="text"
					className="avail__input"
					value={inputValues.quantity}
					onChange={handleOnChange}
					placeholder=""
					name="quantity"
				/>
			</div>
			<label htmlFor="" className="avail__label">
				Warehouse
			</label>
			<div className="avail__select-wrap">
				<select
					className="avail__warehouse"
					name="selectWarehouse"
					id="avail_warehouse"
					onChange={handleOnChange}
					value={inputValues.selectWarehouse}
				>
					<option value={inputValues.selectWarehouse}>
						{inputValues.selectWarehouse}
					</option>
					{warehouses.map((warehouse) => (
						<option key={warehouse.id} value={warehouse.warehouse_name}>
							{warehouse.warehouse_name}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default EditItemAvailabilityForm;
