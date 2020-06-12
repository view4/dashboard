import React, { useState, useEffect } from "react";

import DropDownSelect from "./DropDownSelect";
const assetTypeOptions = [
  {
    name: "Development Site"
  },
  {
    name: "Multi Family"
  },
  {
    name: "Mixed Use"
  },
  {
    name: "Other"
  }
];

const listingStatusOptions = [
  {
    name: "Sold"
  },
  {
    name: "For Sale"
  },
  {
    name: "Under Offer"
  },
  {
    name: "Other"
  }

]

/* 
To do: 

- improve styling
- add price-range filter
- add more fields to filter by.

*/

const FiltersBar = ({ setIsGridDisplay,  isGridDisplay }) => {
  const [ displayGrid, setDisplayGrid ] = useState(undefined)


  useEffect( () => {
    console.log(isGridDisplay)
    setDisplayGrid(isGridDisplay)
  } ,isGridDisplay)

  return (
    <div className={"filters-bar-container"}>
      <div className={"listings-set-display-buttons-container"}>
        <button className={`lo-button ${!displayGrid && "active"}`} onClick={() => setIsGridDisplay(false)}>
          <img 
            src={require("../assets/icons/list.png")} /* Find better icon */
            className={"lo-button-image"}
          />
        </button>
        <button className={`lo-button ${displayGrid && "active"}`} onClick={() => setIsGridDisplay(true)}>
          <img 
            src={require("../assets/icons/grid.png")}  
            className={"lo-button-image"}
          />
        </button>
      </div>
      <div className={"dropdown-filters-container"}>
        <span>
          <DropDownSelect 
            entities={assetTypeOptions}
            onSelect={(val) => console.log("manage select here", val)}
            labelText={"Property Type"}
          />
        </span>
          <DropDownSelect 
            entities={listingStatusOptions}
            onSelect={(val) => console.log("manage select here", val)}
            labelText={"Property Status"}
          />
      </div>
    </div>
 )
};


export default FiltersBar;
