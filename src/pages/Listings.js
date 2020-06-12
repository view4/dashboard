import React, { useState } from "react";

import ListingsData from "../data/listings";

import ListingCard from "../components/ListingCard";
import TableList from "../components/TableList";
import FiltersBar from "../components/FiltersBar";

const Listings = () => {

  console.log(ListingsData)
  const [ isGridDisplay, setIsGridDisplay ] = useState(true)

  return (
    <>
      <FiltersBar setIsGridDisplay={(val) => setIsGridDisplay(val)} isGridDisplay={isGridDisplay}/>
      <div className="list-container">
        { 
          isGridDisplay ? 
            ListingsData.map( (item, i) => <ListingCard propertyEntity={item} key={i} />) : <TableList data={ListingsData}/>
        }
      </div>
    </>
  )  

};


export default Listings;
