import React, { useState } from "react";

import ListingCard from "../components/ListingCard";
import TableList from "../components/TableList";

const list = [
  {
    address: "1 Brim Hill, London, UK",
    sellingPrice: "$1,500,000",
    askingPrice: "$1,500,000",
    status: "Sold",
    propertyType: "Multi Family" ,
    image: 1,
    team: ["John", "Mike"]
  },
   {
    address: "1 Brim Hill, London, UK",
    askingPrice: "$1,500,000",
    status: "For Sale",
    propertyType: "Multi Family" ,
    image: 1,
    team: ["Sue", "Dave"]
  },
  {
    address: "1 Brim Hill, London, UK",
    sellingPrice: "$1,500,000",
    askingPrice: "$1,500,000",
    status: "Sold",
    propertyType: "Multi Family" ,
    image: 2,
  },
  {
    address: "1 Brim Hill, London, UK",
    sellingPrice: "$1,500,000",
    askingPrice: "$1,500,000",
    status: "Sold",
    propertyType: "Multi Family" ,
    image: 3,
  },
  {
    address: "1 Brim Hill, London, UK",
    sellingPrice: "$1,500,000",
    askingPrice: "$1,500,000",
    status: "Sold",
    propertyType: "Multi Family" ,
    image: 4,
    team: ["Clint", "Anna"]
  },
  {
    address: "1 Brim Hill, London, UK",
    sellingPrice: "$1,500,000",
    askingPrice: "$1,500,000",
    status: "Sold",
    propertyType: "Multi Family",
    image: 2,
  },
  {
    address: "1 Brim Hill, London, UK",
    sellingPrice: "$1,500,000",
    askingPrice: "$1,500,000",
    status: "Sold",
    propertyType: "Multi Family",
    image: 1,
  },
  {
    address: "1 Brim Hill, London, UK",
    sellingPrice: "$1,500,000",
    askingPrice: "$1,500,000",
    status: "Sold",
    propertyType: "Multi Family" ,
    image: 2,
  },
];

const Listings = () => {
  const [ isGridDisplay, setIsGridDisplay ] = useState(true)

  return (
    <>
      <div className={"listings-options-container"}>
        <button
          className={"lo-button"}
          onClick={() => setIsGridDisplay(false)}
        >
          List View
          {/*<img 
            src={require("../assets/icons/list.png")} 
            className={"lo-button-image"}
          />*/}
        </button>
        <button 
          className={"lo-button"}
          onClick={() => setIsGridDisplay(true)}
        >
          Grid View
          {/*<img 
            src={require("../assets/icons/grid.png")} 
            className={"lo-button-image"}
          />*/}
        </button>
      </div>
      <div className="list-container">
        { 
          isGridDisplay ? 
            list.map( (item, i) => <ListingCard propertyEntity={item} key={i} />) : <TableList data={list}/>
        }
      </div>
    </>
  )  

};


export default Listings
