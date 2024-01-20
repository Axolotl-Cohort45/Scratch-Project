import React from "react";

const RecordCard = ({ info }) => {
  const {
    record_id,
    restaurant_name,
    address,
    price_level,
    phone,
    website,
    record_date,
    user_rating,
    user_review,
  } = info;

  return (
    <div className="record-card">
      <div className="recordDetails">
        <h3>{restaurant_name ? restaurant_name : "restaurant 1"}</h3>
        <p>
          Record Date: {watch_date}
          <br></br>
          Rating: {rating}
          <br></br>
          Comment: {comment}
          <br></br>
        </p>
      </div>
    </div>
  );
};

export default RecordCard;
