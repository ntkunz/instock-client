import "./EditInventory.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import EditItemDetailsForm from "../../components/EditItemDetailsForm/EditItemDetailsForm";
import EditItemAvailabilityForm from "../../components/EditItemAvailabilityForm/EditItemAvailabilityForm";

function EditInventory() {
	//bring in Api address for axios calls
	const api = process.env.REACT_APP_BASEURL;
	const { v4 } = require("uuid");
	const id = useParams();
	const navigate = useNavigate();

	//useState for all warehouses and inventories
	const [warehouses, setWarehouses] = useState([]);
	const [inventories, setInventories] = useState([]);
	const [inventoryItem, setInventoryItem] = useState([]);
	// const [ outOfStock, setOutOfStock ] = useState("");

	//useState for all form inputs
	const [inputValues, setInputValues] = useState({
		instock: "In Stock",
		quantity: 0,
		selectWarehouse: "",
		itemName: "",
		desc: "",
		category: "",
	});

	//onChange function for all inputs of form
	const handleOnChange = (event) => {
		//create variables for checkbox radios
		const quantityWrapper = document.querySelector(".avail__quantity-wrap");
		const stockRadio = document.querySelectorAll(".avail__radio");

		//create true value if item in stock, false if out of stock
		let stockCheck = stockRadio[0].checked;

		//if item in stock then set instock inputValue and show quantity field
		if (stockCheck) {
			quantityWrapper.classList.remove("avail__out-of-stock");
			// setInputValues({ ...inputValues, instock: "In Stock" });
		}
		//if item out of stock then set instock inputVluae and hide quantity field
		if (!stockCheck) {
			quantityWrapper.classList.add("avail__out-of-stock");
			// setInputValues({ ...inputValues, instock: "Out of Stock" });
		}
		//udpate inputValues
		const { name, value } = event.target;
		setInputValues({ ...inputValues, [name]: value });
		// console.log(event.target.value);
	};

	//on load get warehouses and inventories
	useEffect(() => {
		getWarehouses();
		getInventoryItem();
		getInventories();
	}, []);

	useEffect(() => {
		// setInputValues({ ...inputValues, instock: inventoryItem.status });
		setInputValues({
			...inputValues,
			itemName: inventoryItem.item_name,
			desc: inventoryItem.description,
			quantity: inventoryItem.quantity,
			selectWarehouse: inventoryItem.warehouse_name,
			category: inventoryItem.category,
		});
	}, [inventoryItem]);

	//api get call function to get warehouses ==PASS DOWN LATER... MOVE FUNCTION UP LATER
	function getWarehouses() {
		axios
			.get(`${api}/warehouses`)
			.then((data) => {
				if (data) {
					setWarehouses(data.data);
				}
			})
			.catch((err) => {
				console.log("err: ", err);
				// navigate("/404");
			});
	}

	//removeDup example modified from a respons at https://stackoverflow.com/questions/54757902/remove-duplicates-in-an-array-using-foreach
	function removeDup(arr) {
		let result = [];
		arr.forEach((item) => {
			if (!result.includes(item.category)) result.push(item.category);
		});
		return result;
	}

	const categoryArray = removeDup(inventories);

	//api get call function to get inventories ==move function up later
	function getInventories() {
		axios
			.get(`${api}/inventories`)
			.then((data) => {
				if (data) {
					setInventories(data.data);
				}
			})
			.catch((err) => {
				console.log("err: ", err);
				// navigate("/404");e.target.videoDesc.value
			});
	}

	//api get call function to get inventories ==move function up later
	function getInventoryItem() {
		axios
			.get(`${api}/inventories/${id.inventoryId}`)
			.then((data) => {
				if (data) {
					setInventoryItem(data.data);
					// setInputValues({category: data.data.category, selectWarehouse: data.data.warehouse_name});
				}
			})
			.catch((err) => {
				console.log("err: ", err);
				// navigate("/404");e.target.videoDesc.value
			});
	}

	//function to handle form submit
	function handleFormSubmit(e) {
		e.preventDefault();

		//Get warehouse id based off of warehosue name of inventory item selected
		function getWarehouseId(array) {
			return array.warehouse_name === inputValues.selectWarehouse;
		}
		let warehouseId = warehouses.find(getWarehouseId);

		//form validation
		if (
			inputValues.instock === "" ||
			inputValues.selectWarehouse === "" ||
			inputValues.itemName === "" ||
			inputValues.desc === "" ||
			inputValues.category === ""
		) {
			return alert("Please enter all form field information");
		}

		//make sure that quantity is a number
		if (isNaN(inputValues.quantity)) {
			return alert("Please enter a number for quantity");
		}

		//confirm that a radio button is selected for quantity
		const stockRadio = document.querySelectorAll(".avail__radio");
		let stockCheck = stockRadio[0].checked;
		let outOfStockCheck = stockRadio[1].checked;
		if (!stockCheck && !outOfStockCheck)
			return alert("Please select if item is In Stock or Out of Stock");

			//
		if (outOfStockCheck) setInputValues({ quantity: 0})

		// axios put request to update inventory item
		axios
			.put(`${api}/inventories/${id.inventoryId}`, {
				warehouse_id: warehouseId.id,
				item_name: inputValues.itemName,
				description: inputValues.desc,
				category: inputValues.category,
				status: inputValues.instock,
				quantity: inputValues.quantity,
			})
			.then((response) => {
				alert(`Inventory item ${inputValues.itemName} has been updated`);

				//reset form on successful submit
				e.target.reset();
				setInputValues({
					selectWarehouse: "",
					itemName: "",
					desc: "",
					category: "",
					instock: "Out of Stock",
					quantity: 0,
				});
				//navigate to inventory page
				navigate(`/inventory/${id.inventoryId}`)
			})
			.catch((err) => {
				console.error(err);
			});
	}

	//function to handle form cancel
	function handleFormCancel(e) {
		e.preventDefault();
		document.querySelector("form").reset();
		setInputValues({
			selectWarehouse: "",
			itemName: "",
			desc: "",
			category: "",
			instock: "",
			quantity: 0,
		});
	}

	return (
		<section className="container">
			<div className="heading">
				<Link to={".."} onClick={(e) => {
						e.preventDefault(); 
						navigate(-1); }}
				>
					<img src={ArrowBack} alt="ArrowBackButton" />
				</Link>
				<h1 className="heading__title">Edit Inventory</h1>
			</div>
			<form className="form" onSubmit={handleFormSubmit}>
				<div className="form__component-container">
					<EditItemDetailsForm
						categoryArray={categoryArray}
						inventoryItem={inventoryItem}
						handleOnChange={handleOnChange}
						inputValues={inputValues}
					/>
				</div>
				<div className="form__component-container">
					<EditItemAvailabilityForm
						warehouses={warehouses}
						handleOnChange={handleOnChange}
						inputValues={inputValues}
					/>
				</div>
				<div className="form__button-wrapper">
					<div className="form__button-container">
						<button
							className="form__button form__button--1"
							onClick={handleFormCancel}
						>
							Cancel
						</button>
						<button className="form__button form__button--2">+ Add Item</button>
					</div>
				</div>
			</form>
		</section>
	);
}

export default EditInventory;
