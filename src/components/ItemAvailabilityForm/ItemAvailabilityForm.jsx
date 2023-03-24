import "./ItemAvailabilityForm.scss";

function ItemAvailabilityForm({ warehouses, handleOnChange, inputValues }) {
	// if(typeof(warehouses) !== 'undefined') {console.log(warehouses[0])}; //this is the first warehouse's id
	// if (warehouses.length > 0) {
	// 	console.log(warehouses[0]);
	// } //this is the first warehouse's id
	return (
		<div className="avail">
			<h2 className="avail__title">Item Availability</h2>
			<label htmlFor="name" className="avail__label">
				Status
			</label>
			{/* <fieldset className="avail__status"> */}
			<div className="avail__radio-container">
				<div className="avail__radio-set">
					<input
						className="avail__radio"
						type="radio"
						id="instock"
						name="instock"
						value='1'
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
						value='0'
						onChange={handleOnChange}
					/>
					<label
						className="avail__radio-label out-of-stock"
						htmlFor="outofstock"
					>
						Out of stock
					</label>
				</div>
			</div>
			{/* </fieldset> */}
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
					<option value="" readOnly>
						Please select
					</option>
					{warehouses.map((warehouse) => (
						<option 
							key={warehouse.id} 
							value={warehouse.warehouse_name}>
							{warehouse.warehouse_name}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default ItemAvailabilityForm;
