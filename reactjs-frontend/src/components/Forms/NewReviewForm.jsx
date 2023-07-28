import React, { useState, useRef } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
// import { Image } from "cloudinary-react";
// import DeleteButton from "./hooks/Delete";
import UploadPicture from "./hooks/AddPicture";
import ItemPriceCalculator from "./hooks/ItemPriceCalculator";
import Dropdown from "./hooks/Dropdown";
import CancelButton from "./hooks/Cancel";
import "./Form.css";