import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { editFootprints } from "../redux/actions/actions";

const ratingToSelect = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const EditFootPrints = (info) => {
  const location = useLocation();
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
  } = location.state.info;

  const [newRating, setNewRating] = useState(user_rating);
  const [newComment, setNewComment] = useState(comment);
  const [newRecordDate, setNewRecordDate] = useState(record_date);
  const dispatch = useDispatch();

  const handleCommentChange = (e) => {
    const inputComment = e.target.value;
    setNewComment(inputComment);
  };

  const handleratingChange = (e) => {
    setNewRating(Number(e.target.value) + 1);
  };

  const handledateChange = (e) => {
    setNewRecordDate(e.target.value);
  };

  const handleSubmit = (e) => {
    const info = {
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
      newRecordDate,
      newRating,
      newComment,
    };
    dispatch(editFootprints(info));
  };

  const ratingOptions = ratingToSelect.map((ratingVal, idx) => {
    return (
      <option key={idx} value={idx}>
        {ratingVal}
      </option>
    );
  });

  return (
    <section className="mainSection editFootprintsContainer">
      <article className="card editFootprint">
        <h3>Please enter your Footprint details</h3>
        <form>
          <div className="recordDetails">
            <h3>{brewery_name}</h3>
            <p>
              Brewery Type: {brewery_type}
              <br></br>
              City: {city}
              <br></br>
              Address: {address}
            </p>
          </div>
          <div className="editFootprintFields">
            <label for="record-date">Record Date:</label>
            <input
              type="date"
              id="record-date"
              name="record-date"
              min="2022-01-01"
              max="2024-12-31"
              onChange={handledateChange}
            />
          </div>
          <div className="editFootprintFields">
            <label htmlFor="rating">Rating: </label>
            <select name="rate" id="rate-select" onChange={handleratingChange}>
              {ratingOptions}
            </select>
          </div>
          <div className="editFootprintFields">
            <label htmlFor="comment">Comment: </label>
            <input
              name="comment"
              placeholder={"How do you feel?"}
              onChange={handleCommentChange}
            />
          </div>
        </form>
        <div className="createCharButtonContainer">
          <br></br>
          <button type="button" className="btnMain" onClick={handleSubmit}>
            Save
          </button>
          <Link to="/" className="backLink">
            <button type="button" className="btnSecondary">
              Back to Footprint
            </button>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default withRouter(EditFootPrints);
