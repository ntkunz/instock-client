import "./AddNewInventoryItem.scss";
import axios from "axios";
import { useState, useEffect } from "react";
const { v4 } = require("uuid");
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import ItemDetailsForm from "../ItemDetailsForm/ItemDetailsForm";
import ItemAvailabilityForm from "../ItemAvailabilityForm/ItemAvailabilityForm";

function AddNewInventoryItem() {
	//bring in Api address for axios calls
	const api = process.env.REACT_APP_BASEURL;

	//useState for all warehouses and inventories
	const [warehouses, setWarehouses] = useState([]);
	const [inventories, setInventories] = useState([]);
    // const [ outOfStock, setOutOfStock ] = useState("");

	//useState for all form inputs
	const [inputValues, setInputValues] = useState({
		instock: "", //not sure
		quantity: 0,
		selectWarehouse: "",
		itemName: "",
		desc: "",
		category: "",
	});

	//onChange function for all inputs of form
	const handleOnChange = (event) => {
		const { name, value } = event.target;
		setInputValues({ ...inputValues, [name]: value });
		console.log(event.target.value);
		if (inputValues.instock == 1) {//DON'T SHOW QUANTITY HERE!
			document.querySelector('.avail__quantity-wrap').classList.add("avail__out-of-stock")
			console.log(document.querySelector('.avail__quantity-wrap'))
			// console.log(document.querySelector('.avail__quantity-wrap').classList)
		}
		if (inputValues.instock == 0) {
			document.querySelector('.avail__quantity-wrap').classList.remove("avail__out-of-stock")
		}

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
		// console.log(e.taget)
		//ADD ERROR HANDLING!
        // stockCheck(inputValues.outOfStock);

		let currentStatus = "";
		if (inputValues.instock === 0) currentStatus = "Out of Stock";
		if (inputValues.instock === 1) currentStatus = "In Stock";

		if (
			inputValues.instock === "" ||
			inputValues.selectWarehouse === "" ||
			inputValues.itemName === "" ||
			inputValues.desc === "" ||
			inputValues.category === ""
		) {
			return alert("Please enter all form field information");
		}

		//WORK ON MAKING SURE QUANTITY IS A NUMBER!!!!!!!!!!!!1==========
		console.log(typeof parseInt(inputValues.quantity));
		// if (typeof(inputValues.quantity) !== 'number' || inputValues.quantity !== 0) return alert("Pleaes enter a number for quantity")
		console.log("hooray!");
		console.log(inputValues.selectWarehouse);

		axios
			.post(`${api}/inventories`, {
				id: { v4 },
				warehouse_id: inputValues.selectWarehouse,
				item_name: inputValues.itemName,
				description: inputValues.desc,
				category: inputValues.category,
				status: currentStatus,
				quantity: inputValues.quantity,
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
					instock: "",
					quantity: 0,
				});
				//HERE MAYBE NAVIGATE TO INVENTORIES PAGE===============
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
