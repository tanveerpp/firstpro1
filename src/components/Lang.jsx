import React from "react";
const Lang=({lname,duration,details,fees})=>{
    return(
        <>
        <h1>Language Name : {lname}</h1>
        <h2>Duration : {duration}</h2>
        <h2>Details : {details}</h2>
        <h2>Fees : {fees}</h2>
        <hr/>
        </>
    )
}
export default Lang;