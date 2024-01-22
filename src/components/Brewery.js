import React from "react";
import { Link } from "react-router-dom";

export const Brewery = () => {
  return (
    <body>
      <div className="brewery" style="white-space: pre">
        <ul>
          <li>{id}</li>
          <li>{name}</li>
          <li>{brewery_type}</li>
          <li>{address_1}</li>
          <li>{address_2}</li>
          <li>{address_3}</li>
          <li>{city}</li>
          <li>{state_province}</li>
          <li>{postal_code}</li>
          <li>{country}</li>
          <li>{longtitude}</li>
          <li>{latitude}</li>
          <li>{phone}</li>
          <li>{website_url}</li>
          <li>{state}</li>
        </ul>
      </div>
    </body>
  );
};
