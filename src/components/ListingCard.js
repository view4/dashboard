import React, { useState, useEffect, useContext, forwardRef } from "react";

import Avatar from "./Avatar";



const ListingCard = ({ propertyEntity}) => {
  const [ bgImage, setBgImage ] = useState("");
  const {  address, sellingPrice, askingPrice, status, propertyType, image } = propertyEntity;

  const img = require("../assets/images/house2.jpg")
  useEffect(() => {
    setBgImage(require(`../assets/images/house${image}.jpg`));

  } ,[])
    console.log(bgImage)
  return (
    <div
      className="card-container"
    >
      <div 
      className={"image-container"}
      style={{
        backgroundImage: image && `url(${bgImage})`//`url(${img})`
      }}
      > </div>
	<div className="content-container">
          <div className="title-container">
	    <span>
              <h4 className={"address-text"}>
                {address}
	      </h4>
            </span>
            <span>
              <div> {propertyType} </div>
            </span>

	  </div>
		<div className="price-container">
	          <h5 className="price-text">{askingPrice}</h5>
                  <span className={"selling-price-text"}> 
                    {status === "Sold" && sellingPrice} 
                  </span>
                </div>
                <div>
                    <span className="status-text"> {status} 

                    </span>    
		</div>
		<div className="card-footer">
                  <Avatar/>
                  <Avatar/>
		</div>
	</div>
    </div>
  )
};

export default ListingCard;
