import React from "react";
import ListingCard from "../components/ListingCard";

const list = [
  {
    address: "1 Brim Hill, London, UK",
    sellingPrice: "$1,500,000",
    askingPrice: "$1,500,000",
    status: "Sold",
    propertyType: "Multi Family" ,
    image: 1,
  },
   {
    address: "1 Brim Hill, London, UK",
    askingPrice: "$1,500,000",
    status: "For Sale",
    propertyType: "Multi Family" ,
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

  return (
    <>
      <div className={"listings-options-container"}>
        <button className={"lo-button"}>
          List View
          {/*<img 
            src={require("../assets/icons/list.png")} 
            className={"lo-button-image"}
          />*/}
        </button>
        <button className={"lo-button"}>
          Grid View
          {/*<img 
            src={require("../assets/icons/grid.png")} 
            className={"lo-button-image"}
          />*/}
        </button>
      </div>
      <div className="list-container">
        {list.map( (item, i) => <ListingCard propertyEntity={item} key={i} />)}
      </div>
    </>
  )  

};


export default Listings
