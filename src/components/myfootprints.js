import React from "react";
import recordCard from "./recordCard";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

const DisplayFootPrints = (props) => {
  const dispatch = useDispatch();
  const footprints = useSelector((state) => state.footprints);

  console.log(footprints);

  return (
    <div className="footprints-page">
      <div className="container">
        <div className="content-container">
          <div className="profile-container">
            <img
              src={require("../img/user.png").default}
              alt="User Profile"
              className="profile-image"
              width="150"
              height="200"
            />
            <h4>User Profile</h4>
            <div>
              Name: User1 <br></br>
              Date Joined: 2023-01-01
            </div>
          </div>
          <div className="right-container">
            <div className="select-container">
              <label for="year-select">Please select year:</label>
              <select name="year" id="year-select">
                <option value="">----All----</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </div>

            {footprints.length > 0 ? (
              <div className="footprint-grid">
                {footprints.map((record) => (
                  <recordCard key={record.id} info={record} />
                ))}
              </div>
            ) : (
              <h2>Please add some records in your list!</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(DisplayFootPrints);
