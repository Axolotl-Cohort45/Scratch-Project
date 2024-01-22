import React from "react";
import { Link } from "react-router-dom";

export const Brewery = () => {
  return (
    <body>
      <div className="brewery" style="white-space: pre">
        <ul>
          <li>{name}</li>
          <li>{address_1}</li>
          <li>{city}</li>
          <li>{state}</li>
          <li>{phone}</li>
          <li>{website_url}</li>
        </ul>
      </div>
    </body>
  );
};
