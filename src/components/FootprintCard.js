import React from "react";
import { deleteFootprints } from "../redux/actions/actions";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const FootprintCard = ({ info }) => {
  const {
    _id,
    brewery_id,
    brewery_name,
    brewery_type,
    city,
    state_province,
    country,
    address,
    phone,
    website_url,
    record_date,
    user_rating,
    comment,
  } = info;

  const dispatch = useDispatch();
  let history = useHistory();

  const handleDelete = () => {
    dispatch(deleteFootprints(info));
  };

  const handleEdit = () => {
    history.push({ pathname: "/edit", state: { info } });
  };

  return (
    <div className="record-card">
      <div className="recordDetails">
        <h3>{brewery_name}</h3>
        <p>
          Brewery Type: {brewery_type}
          <br></br>
          City: {city}
          <br></br>
          Address: {address}
          <br></br>
          Record Date: {record_date}
          <br></br>
          Rating: {user_rating}
          <br></br>
          Comment: {comment}
          <br></br>
        </p>
      </div>
      <div className="footprint-button-container">
        <button
          className="footprint-button footprint-button-edit"
          onClick={handleEdit}
        >
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          className="footprint-button footprint-button-delete"
          onClick={handleDelete}
        >
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default FootprintCard;
