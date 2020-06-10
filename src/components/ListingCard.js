import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";


const ListingCard = ({ propertyEntity}) => {
  const [ bgImage, setBgImage ] = useState("");
  const {  address, sellingPrice, askingPrice, status, propertyType, image } = propertyEntity;

  useEffect(() => {
    setBgImage(require(`../assets/images/house${image}.jpg`));
  } ,[]);

  return (
    <div className="card-container">
      <div 
        className={"image-container"}
        style={{
          backgroundImage: image && `url(${bgImage})`
        }}
      /> 
    <div className="content-container">
      <div className="address-container">
        <span>
          <h4 className={"address-text"}>
            {address}
          </h4>
        </span>
        <div> {propertyType} </div>
      </div>
      <div className="price-container">
        <h5 className="price-text">{askingPrice}</h5>
        <span className={"selling-price-text"}> 
          {status === "Sold" && sellingPrice} 
        </span>
      </div>
      <div>
        <span className="status-text"> 
          {status} 
        </span>    
      </div>
      <div className="avatars-container">
        <Avatar/>
        <Avatar/>
      </div>
    </div>
	</div>
  )
};

export default ListingCard;
