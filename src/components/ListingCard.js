import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";


const Label = ({text}) => {

  return (
    <div className={"listing-card-label-container"}>
      {text}
    </div>
  )
};

const sampleTeam = [  
  { name: "Michael", photo: 1 }, { name: "John", photo: 3 }, { name: "Rachel", photo:2 }
];

const ListingCard = ({ propertyEntity}) => {
  const [ bgImage, setBgImage ] = useState("");
  const {  building_address, sale_price, asking_price, asset_type, listing_status, image, team, building_image } = propertyEntity;
  useEffect(() => {
    setBgImage(require(`../assets/images/house${building_image ? building_image : "1"}.jpg`));
  } ,[]);
  return (
    <div className="card-container">
      <div 
        className={"image-container"}
        style={{
          backgroundImage: building_image && `url(${bgImage})`
        }}
      /> 
      <div className={"status-banner"}>
        <span>{listing_status} </span> 
      </div>
    <div className="content-container">
      <div className="address-container">
        <span>
          <h4 className={"address-text"}>
            {building_address.slice(0)  }
          </h4>
        </span>
        <div> <Label text={asset_type}/> </div>
      </div>
      <div className="price-container">
        <h5 className="price-text">${asking_price}</h5>
        <span className={"selling-price-text"}> 
          {//listing_status === "Sold" && ("$ " + sale_price)
} 
        </span>
      </div>
      <div>
        <span className="status-text"> 

        </span>    
      </div>
      <div className="avatars-container">
        {/*team && team.map*/sampleTeam.map((person, i) => <Avatar key={i} photo={person.photo} letter={person.name.slice(0,1)}/>)}
      </div>
    </div>
	</div>
  )
};

export default ListingCard;
