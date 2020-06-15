import React, { useEffect, useState } from "react";
import { Popover } from 'antd';
import Avatar from "./Avatar";


const Squared = () => <> &#xB2;</>

const Label = ({text, squared}) => {

  return (
    <div className={"listing-card-label-container"}>
      {text}
      {squared && <Squared />}
    </div>
  )
};

const sampleTeam = [  
  { name: "Michael", photo: 1 }, { name: "John", photo: 3 }, { name: "Rachel", photo:2 }
];

const ListingCard = ({ propertyEntity}) => {
  const [ bgImage, setBgImage ] = useState("");
  const {  
    building_address, 
    sale_price, asking_price, 
    asset_type, 
    listing_status, 
    image, 
    team, building_image,
    square_feet
  } = propertyEntity;
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
      > 

      </div>
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
      </div>
      <div className="price-container">
        <h5 className="price-text">${asking_price}</h5>
        <span className={"selling-price-text"}> 
          {//listing_status === "Sold" && ("$ " + sale_price)
} 
        </span>
        <div className="avatars-container">
          {/*team && team.map*/
            sampleTeam.map(
              (person, i) => (
               <Popover key={i} title={person.name} content={<> hi</>}>
                  <Avatar 
                    photo={person.photo} 
                    letter={person.name.slice(0,1)}
                  />
                </Popover>
              )
           )}
        </div>
      </div>

      <div className={"labels-container"}> 
        <Label text={asset_type}/> 
        {square_feet && <Label text={square_feet + "/ft"} squared={true}/>}
      </div>

    </div>
	</div>
  )
};

export default ListingCard;
