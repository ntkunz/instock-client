import "./EditWarehouseForm.scss";
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import EditWarehouseDetailsForm from "../WarehouseDetailsForm/WarehouseDetailsForm";
import EditContactDetailsForm from "../ContactDetailsForm/ContactDetailsForm";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function EditNewWarehouseForm() {
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
  // const [edit, setEdit] = useState(false)
  const { id } = useParams();
  const URL = `http://localhost:8080/warehouses/${id}`

  useEffect(() => {
    axios.get(`${URL}`).then((response) => {
      const warehouseData = response.data;
      setFormData ({
        ...formData,
        warehouse: warehouseData.warehouse_name,
        city: warehouseData.city,
        country: warehouseData.country,
        contactName: warehouseData.contact_name,
        position: warehouseData.position,
        phoneNumber: warehouseData.contact_phone,
        email: warehouseData.email
      })
    });
  }, []);


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
        const response = await axios.put(`http://localhost:8080/warehouses/${id}`, {
          warehouse_id: id,
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
        alert(`${formData.warehouse} successfully edited, redirecting to homepage.`);
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
        <h1 className="heading__warehouse">Edit Warehouse</h1>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form__wrapper">
          <EditWarehouseDetailsForm
            formData={formData}
            handleChange={handleChange}
            errorValues={errorValues}
          />
          <EditContactDetailsForm
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
              Save
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default EditNewWarehouseForm;
