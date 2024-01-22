import React, { useEffect } from "react";
import FootprintCard from "./FootprintCard";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchFootprints } from "../redux/actions/actions";

const DisplayFootPrints = (props) => {
  const dispatch = useDispatch();
  const footprints = useSelector((state) => state.footprints);

  useEffect(() => {
    dispatch(fetchFootprints());
  }, []);

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
          <div className="footprints">
            {footprints.length > 0 ? (
              <div className="footprint-grid">
                {footprints.map((record) => (
                  <FootprintCard key={record._id} info={record} />
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
