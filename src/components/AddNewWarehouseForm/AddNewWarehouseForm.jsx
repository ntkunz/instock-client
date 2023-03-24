import "./AddNewWarehouseForm.scss";
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import WarehouseDetailsForm from "../WarehouseDetailsForm/WarehouseDetailsForm";
import ContactDetailsForm from "../ContactDetailsForm/ContactDetailsForm";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const { v4: uuid } = require("uuid");

function AddNewWarehouseForm() {
  const [formData, setFormData] = useState({
    warehouse: "",
    streetAddress: "",
    city: "",
    country: "",
    contactName: "",
    position: "",
    phoneNumber: "",
    email: "",
  });
  const [errorValues, setErrorValues] = useState({
    phone: false,
    email: false,
    empty: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const validatePhoneNumber = (value) =>
    /^[0-9]*$/.test(value) && value.length >= 7;

  const validateEmail = (value) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);


  // useEffect(() => {
  //   updateErrorMessage(errorValues);
  // }, []);

  const isFormValid = () => {
    let isValid = true;
    let newErrorValues = { ...errorValues };

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrorValues.empty = true;
        isValid = false;
      }
    });

    if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrorValues.phone = true;
      isValid = false;
    }
    if (!validateEmail(formData.email)) {
      newErrorValues.email = true;
      isValid = false;
    }

    setErrorValues(newErrorValues);

    return isValid;
  };

  const handleSubmit = async (event) => {
    setSubmitting(true);

    if (isFormValid()) {
      try {
        const response = await axios.post("http://localhost:8080/warehouses", {
          id: uuid(),
          warehouse_name: formData.warehouse,
          address: formData.streetAddress,
          city: formData.city,
          country: formData.country,
          contact_name: formData.contactName,
          contact_position: formData.position,
          contact_phone: formData.phoneNumber,
          contact_email: formData.email,
        });

        console.log(response.data);
        alert("Warehouse successfully added, redirecting to homepage.");
        navigate("/warehouses");
      } catch (error) {
        console.log(error);
      }
    } else {
      setSubmitting(false);
      alert("Please fill in all required fields correctly.");
    }
    event.preventDefault();
  };

  const handleCancel = () => {
    return navigate("/warehouses");
  };

  return (
    <section className="form-wrapper">
      <div className="heading">
        <Link to="/warehouses">
          <img src={ArrowBack} alt="ArrowBackButton" />
        </Link>
        <h1 className="heading__warehouse">Add New Warehouse</h1>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form__wrapper">
          <WarehouseDetailsForm
            formData={formData}
            handleChange={handleChange}
            errorValues={errorValues}
          />
          <ContactDetailsForm
            formData={formData}
            handleChange={handleChange}
            errorValues={errorValues}
          />
        </div>
        <div className="form__button-wrapper">
          <div className="form__button-container">
            <button
              onClick={handleCancel}
              className="form__button form__button--1"
            >
              Cancel
            </button>
            <button type="submit" className="form__button form__button--2">
              +Add Warehouse
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default AddNewWarehouseForm;
