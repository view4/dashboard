import React, { useEffect, useState } from "react";
import { Popover } from 'antd';

const PopoverContent = ({photo}) => {

  return (
    <div className={"avatar-popover-content-container"}>
      <div 
        className={"avatar-container large"}
        style={{
          backgroundImage: photo && `url(${photo})`
        }}
       />
       <div>
         <div>
           <a>Agency name</a>
         </div>
         <div>
           <a>Link to profile</a>
         </div>
       </div>
  
    </div>
  )
} 



const Avatar = ({photo, letter}) => {

  const [ image, setImage ] = useState("");

  useEffect(() => setImage(require(`../assets/images/avatar${photo}.jpeg`)), []);



  return (
  <Popover title={"John Doe"} content = {<PopoverContent photo={image}/>}>
    <div 
      className={"avatar-container"}
      style={{
        backgroundImage: photo && `url(${image})`
      }}
        >
       { //photo && <img src={image} /> 
}
        { !photo && letter}
      </div>
    </Popover>
  )
};

export default Avatar;
