import React from "react";
import { withRouter } from "react-router-dom";

const SearchPage = (props) => {
  const brewerySearchResults = [];
  const handleSearchButtonClick = () => {
    const citySearchBox = document.querySelector("#citySearchBox");
    const cityName = citySearchBox.value;

    // const brewerySearchBox = document.querySelector("#brewerySearchBox");
    // const breweryName = brewerySearchBox.value;

    // const cuisineSearchBox = document.querySelector("#cuisineSearchBox");
    // const cuisineStyle = cuisineSearchBox.value;

    fetch("http://localhost:3000/search:city", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        city: cityName,
      }),
    })
      .then((response) => {
        console.log("response: ", response);
        brewerySearchResults = response;
        return;
      })
      .catch(err);
    return next({
      log: `${err}: an error occurred in the fetch (POST) request/response process in the Searchpage function in search.js file`,
      status: 500,
      message: {
        err: "An error occurred during this request.  Please try again shortly.",
      },
    });
  };

  console.log(brewerySearchResults);

  const breweryBoxes = [];
  brewerySearchResults.forEach((el, index) => {
    breweryBoxes.push(
      <Brewery
        name={name}
        address_1={address_1}
        city={city}
        state={state}
        phone={phone}
        website_url={website_url}
      />
    );
  });

  return (
    <>
      <h1>Search Breweries</h1>
      <div>
        <form>
          <label for="citysearchbox">City Name (required):</label>
          <input type="text" id="citySearchBox" name="searchCity" />
        </form>

        <button className="searchButton" onClick={handleSearchButtonClick}>
          SEARCH
        </button>
      </div>
    </>
  );
};

export default withRouter(SearchPage);
