import "./AddNewInventoryItem.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import ItemDetailsForm from "../ItemDetailsForm/ItemDetailsForm";
import ItemAvailabilityForm from "../ItemAvailabilityForm/ItemAvailabilityForm";

function AddNewInventoryItem() {
	//bring in Api address for axios calls
	const api = process.env.REACT_APP_BASEURL;
	const { v4 } = require("uuid");

	//useState for all warehouses and inventories
	const [warehouses, setWarehouses] = useState([]);
	const [inventories, setInventories] = useState([]);
	// const [ outOfStock, setOutOfStock ] = useState("");

	//useState for all form inputs
	const [inputValues, setInputValues] = useState({
		instock: "Out of Stock",
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
		getInventories();
	}, []);

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

	//function to handle form submit
	function handleFormSubmit(e) {
		e.preventDefault();

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

		if (isNaN(inputValues.quantity)) {return alert('Please enter a number for quantity')}

		axios
			.post(`${api}/inventories`, {
				id: v4(),
				warehouse_id: inputValues.selectWarehouse,
				item_name: inputValues.itemName,
				description: inputValues.desc,
				category: inputValues.category,
				status: inputValues.instock,
				quantity: inputValues.quantity
			})
			.then((response) => {
				alert(`Your new inventory item ${inputValues.itemName} has been added`);
				
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
			// 	//HERE MAYBE NAVIGATE TO INVENTORIES PAGE ??===============
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
				<img src={ArrowBack} alt="ArrowBackButton" />
				<h1 className="heading__title">Add New Inventory Item</h1>
			</div>
			<form className="form" onSubmit={handleFormSubmit}>
				<div className="form__component-container">
					<ItemDetailsForm
						inventories={inventories}
						handleOnChange={handleOnChange}
						inputValues={inputValues}
					/>
				</div>
				<div className="form__component-container">
					<ItemAvailabilityForm
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

export default AddNewInventoryItem;
