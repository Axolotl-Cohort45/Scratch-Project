import React, { useState } from "react";
import { useDispatch } from "react-redux";

//Will require access to specific Brewery Result ID
//Will Render out that specific Brewery info
//Name:
//Address:
//Photos: -- Will have to create mock images --
//Create comments field for text input w/button
//Button: Add Review, will create POST request to /footprints/add.
//Button: Wishlist, sends POST request to /wishlist/add endpoint
const BrewDetails = (props) => {
  // const { brewery_name } = props
  const mockProps = {
    userId: "TestID123",
    brewery_id: "BreweryID123",
    brewery_name: "The Best Brewery",
    brewery_type: "Micro",
    city: "Woodbridge",
    state_province: "Virginia",
    country: "US",
    address: "Drunky Place Avenue 4040",
    phone: "111-111-1111",
    website_url: "www.DrinkyPlace.com",
    record_date: "04-12-2023",
    user_rating: 8,
    comment: "Such a wonderful brewery place.",
  };

  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const commentData = e.target.value;
    setInputValue(commentData);
  };

  const submitReview = () => {
    //Handle POST request to /footprints/add
    const reviewToSend = inputValue;
    console.log("Review to Submit", reviewToSend);
    // dispatch(reviewToSend);
  };

  const saveWishlist = (e) => {
    //Handle POST request to /wishlist/add
    const saveToWish = e.target.value;
    dispatch(saveToWish);
  };

  //Not working. Unsure of syntax for src to understand randomImg.
  const randomBrew = () => {
    //Create an array of images to pull from upon brew-details load.
    const randomImgArr = [
      "../img/BrewBeer.png",
      "../img/Brewery.png",
      "../img/BrewPlace.png",
    ];
    const randomImg =
      randomImgArr[Math.floor(Math.random(randomImgArr.length))];
    return randomImg;
  };

  return (
    <div className="brewdetails-page">
      <div className="brewinfo-container">
        <h1>Details of the {mockProps.brewery_name}!</h1>
        <img
          src={require("../img/BrewBeer.png").default}
          alt="Brewery Picture Placeholder"
          className="brew-images"
          width="250"
          height="250"
        />
        {/* Contains Restaurants Info */}
        <ul>
          <li>
            Address: {mockProps.address} {mockProps.city},{" "}
            {mockProps.state_province}
          </li>
          <br></br>
          <li>Website: {mockProps.website_url}</li>
          <br></br>
          <li>Brew Type: {mockProps.brewery_type}</li>
        </ul>
      </div>
      <div className="comments-container">
        <h2>Leave a review below!</h2>
        {/* Create comment input field */}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Leave us a review!"
        ></input>
        <br></br>
        {/* Create Add Review Button */}
        <button type="submit" onClick={submitReview}>
          <br></br>
          Add Review!
        </button>
        {/* Create Wishlist Button */}
        <button type="submit" onClick={saveWishlist}>
          <br></br>
          Save {mockProps.brewery_name} to Wishlist!
        </button>
      </div>
    </div>
  );
};

export default BrewDetails;
