import React, { useState, useRef } from "react";
// import { useLocation, useParams, useNavigate } from "react-router-dom";
// import { Image } from "cloudinary-react";
// import DeleteButton from "./hooks/Delete";
// import UploadPicture from "./hooks/AddPicture";
// import ItemPriceCalculator from "./hooks/ItemPriceCalculator";
// import Dropdown from "./hooks/Dropdown";
// import CancelButton from "./hooks/Cancel";
// import "./Form.css";

const Form = (props) => {
  const [formData, setFormData] = useState({
    image: `${item?.image}` || "",
    name: item?.name || "",
    quantity: item?.quantity || 0,
    price: item?.price_cents / 100 || 0,
    minimum_level: item?.minimum_level || 0,
    total_cost: "",
    description: item?.description || "",
    folder_id: 1,
    department_id: item?.department_id || departmentID,
  });

  // the user can input data on the form
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
}

export default Form;