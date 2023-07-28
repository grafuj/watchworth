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

  let film = "";
  if (!location.state) {
    console.log(film);
  } else {
    film = location.state.item;
  }
  
  const [formData, setFormData] = useState({
    name: film?.name || "",
    imdb_url: film?.imdb_url || "",
    release_date: film?.release_date || "",
    genre: film?.genre || "",
  });


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

    // // alerts the user to select a name before saving the form
    // if (!film.name) {
    //   alert("Please select a name before saving!");
    //   return;
    // }

    // //filmID should be obtained from the database to see if it exists
    // let filmID = 1;
    // // Submits form data to the backend if there is no item id associated
    // if (!filmID) {
    //   try {
    //     const response = await fetch("/api/films", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({
    //         film: { ...film }
    //       })
    //     });
    //   } catch (error) {
    //     console.log("Error saving to db", error);
    //     return;
    //   }
    // }
  };

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
          IMDb URL:
          <input
            type="text"
            name="imdb_url"
            value={formData.imdb_url}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div className="notes-input">
        <label>
          Release Date: 
          <textarea
            name="release_date"
            value={formData.release_date}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div className="notes-input">
        <label>
          Genre:
          <textarea
            name="genre"
            value={formData.genre}
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


};

export default Form;