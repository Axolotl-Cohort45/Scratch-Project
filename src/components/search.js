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
        id={id}
        name={name}
        brewery_type={brewery_type}
        address_1={address_1}
        address_2={address_2}
        address_3={address_3}
        city={city}
        state_province={state_province}
        postal_code={postal_code}
        country={country}
        longtitude={longtitude}
        latitude={latitude}
        phone={phone}
        website_url={website_url}
        state={state}
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

        {/* <form>
          <label for="brewerysearchbox">Brewery Name (optional):</label>
          <input type="text" id="brewerySearchBox" name="searchBrewery" />
        </form>

        <form>
          <label for="cuisinesearchbox">Cuisine/Style (optional):</label>
          <input type="text" id="cuisineSearchBox" name="searchCuisine" />
        </form> */}

        <button className="searchButton" onClick={handleSearchButtonClick}>
          SEARCH
        </button>
      </div>
    </>
  );
};

export default withRouter(SearchPage);
