import React, { useEffect, useState } from "react";

const Avatar = ({photo, letter}) => {

  const [ image, setImage ] = useState("");

  useEffect(() => setImage(require(`../assets/images/avatar${photo}.jpeg`)), []);

  return (
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
  )
};

export default Avatar;
