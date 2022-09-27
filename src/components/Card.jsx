import React from "react";
const Card=({lname,duration,details,fees,img})=>{
return(
    <>
    <div class="card" style={{'width': "18rem"}} >
  <img src={img} class="card-img-top" alt="..." />
  <div class="card-body">
    
    <h1 className="card-title">{lname} {duration}</h1>
    <h2 className="card-subtitle">{fees}</h2>
    <p class="card-text">{details}</p>
  </div>
</div>
    </>
)
}
export default Card;