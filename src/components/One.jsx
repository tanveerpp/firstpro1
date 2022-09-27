import React from "react";
import './One.css';
const Lang=({lname,duration,details,fees,cls})=>{
    var styling={color:'green',backgroundColor:'grey'};
    return(
        <>
        <h1>Language Name : {lname}</h1>
        <h2>Duration : {duration}</h2>
        <h4 style={styling}>Details: {details}</h4>
        <h3>Fees : {fees}</h3>
        <h3>Class : {cls}</h3>
        <hr/>
        </>
    )
}
export default Lang;