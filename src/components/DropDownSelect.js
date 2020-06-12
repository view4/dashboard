import React, { useState } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";


import "../styles/dropdown.css";

const dropDownIcon = require("../assets/icons/dropdown.png");
const closeIcon = require("../assets/icons/escape.png")

const DropDownMobileModal = ({entities, onSelect, close}) => {

  return (
    <div className={"dd-modal-container"}>
      <div className={"dd-modal-content"}>
        <div className={"dd-modal-close-container"}>
          <img 
            src={closeIcon} 
            className={"modal-close-icon"} 
            onClick={close}
          />
        </div>
        <div className={"dd-modal-options-container"}>
        {
          entities.map( (entity, i )  => (
            <div
              key={entity.id} 
              className={(entities.length === i + 1) ? "drop-down-item last " :"drop-down-item"}
              onClick={
                () => {
                  onSelect(entity)
                  close()
                }
              }
             >
               { entity.name && entity.name}
            </div>
          ))
      }
        </div>
      </div>
    </div>
    
  )
};

const DropDownOptions = ({entities, onSelect}) => {

  return (
    <>
        {
          entities.map( (entity, i )  => (
            <div
              key={entity.id} 
              className={(entities.length === i + 1) ? "drop-down-item last " :"drop-down-item"}
              onClick={
                () => {
                  onSelect(entity)
                }
              }
             >
               { entity.name && entity.name}
            </div>
          ))
      }
    </>
  )
}

const DropDownSelect = ({entities,  onSelect, close}) => {
  const [ displayDropDown, setDisplayDropDown ] = useState(false)
  const filteredEntites = entities;
  console.log(entities)


  return(
    <div className={"dropdown-container"}>
      <div onClick={() => setDisplayDropDown(!displayDropDown)} className={"dropdown-label-container"}> 
        <span> Please select ... </span> 
        <img className={"dropdown-icon"} src={displayDropDown ? closeIcon : dropDownIcon} />
      </div>
      { displayDropDown && (
        <div className={"dropdown-options-container"}>
          {  
            isMobile ? 
              <DropDownMobileModal 
              entities={entities} 
              onSelect={onSelect}  
              close={() => setDisplayDropDown(false)}
            /> : <DropDownOptions entities={entities} onSelect={onSelect}/>
          }
        </div>
      )}
    </div>
  )
}

export default DropDownSelect;
