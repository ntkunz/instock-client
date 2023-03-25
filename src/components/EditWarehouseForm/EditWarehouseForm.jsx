import "./EditWarehouseForm.scss";
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import EditWarehouseDetailsForm from "../WarehouseDetailsForm/WarehouseDetailsForm";
import EditContactDetailsForm from "../ContactDetailsForm/ContactDetailsForm";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

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
  const [edit, setEdit] = useState(false);
  // const [edit, setEdit] = useState(false)
  const { id } = useParams();
  const URL = `http://localhost:8080/warehouses/${id}`;

  useEffect(() => {
    axios.get(`${URL}`).then((response) => {
      const warehouseData = response.data;
      setFormData({
        ...formData,
        warehouse: warehouseData.warehouse_name,
        streetAddress: warehouseData.address,
        city: warehouseData.city,
        country: warehouseData.country,
        contactName: warehouseData.contact_name,
        position: warehouseData.contact_position,
        phoneNumber: warehouseData.contact_phone,
        email: warehouseData.contact_email,
      });
    });
  }, []);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validatePhoneNumber = (value) =>
    /^[0-9]*$/.test(value) && value.length >= 10;

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
    event.preventDefault();
    if (isFormValid()) {
      axios
        .put(`${URL}`, {
          warehouse_name: formData.warehouse,
          address: formData.streetAddress,
          city: formData.city,
          country: formData.country,
          contact_name: formData.contactName,
          contact_position: formData.position,
          contact_email: formData.email,
          contact_phone: formData.phoneNumber,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
      setEdit(true);
      setTimeout(()=> {
             navigate("/");
          }, 2000)
          alert("Edit Successful, redirecting to warehouse page.")
      return navigate("/warehouses")
    }
  };

  const handleCancel = () => {
    return navigate("/");
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
