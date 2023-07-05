import React, { useState, useRef } from "react";
// import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import { Image } from "cloudinary-react";
// import DeleteButton from "./hooks/Delete";
// import UploadPicture from "./hooks/AddPicture";
// import ItemPriceCalculator from "./hooks/ItemPriceCalculator";
// import Dropdown from "./hooks/Dropdown";
import CancelButton from "../Hooks/CancelButton";
// import "./Form.css";

const Form = (props) => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: film?.name || "",
    imdb_url: film?.imdb_url || "",
    release_date: film?.release_date || "",
    genre: film?.genre || "",
  });

  let film = "";
  if (!location.state) {
    console.log(film);
  } else {
    film = location.state.item;
  }

  const formRef = useRef();

  // the user can input data on the form
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  }

  return (
    <form className="items-form" onSubmit={handleSubmit} ref={formRef}>
      <div>
        <label>
          Film name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          IMDb Link:
          <input
            type="text"
            name="imdb-url"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
      </div>


      <div className="notes-input">
        <label>
          Notes:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div>
        <button type="submit">Save Item</button>
        <CancelButton onClose={props.onClose} />  
      </div>
    </form>
  );
  

}

export default Form;