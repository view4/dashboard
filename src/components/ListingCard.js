import React, { useState, useEffect, useContext, forwardRef } from "react";

import Avatar from "./Avatar";



const ListingCard = ({ propertyEntity}) => {
  const [bgImage, setBgImage] = useState("");
  const {  address, sellingPrice, askingPrice, status, propertyType, image } = propertyEntity;

  const img = require("../assets/images/house2.jpg")
  useEffect(() => {
    setBgImage(require(`../assets/images/house${image}.jpg`));

  } ,[])
    console.log(bgImage)
  return (
    <div
      className="card-container"
      style={{
        backgroundImage: image && `url(${bgImage})`//`url(${img})`
      }}
    >

	<div className="content-container">
		<div className="title-container">
			<h4 className={"address-text"}>
			  {address}
			</h4>

		</div>
		<div className="subheading-container">
	          <h5 className="price-text">{askingPrice}</h5>
                  <span className={"selling-price-text"}> {sellingPrice} </span>
		</div>
		<div className="description-container">
                  <div className="status-text"> {status} </div>
                  <div> {propertyType} </div>
                    
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
