import React, { useState } from "react";
const Inputs=()=>{
let[n,updatevalue1]=useState({n1:0,n2:0,r:0});
function change(e)
{
        updatevalue1({...n,[e.target.name]:e.target.value});
} 
function add(e)
{
    updatevalue1({...n,r:parseInt(n.n1)+parseInt(n.n2)});
}
return(
    <>
    <h1>Inputs Component is running {n.r}</h1>
    <input type="number" name="n1" id="n1" onChange={change} />
    <input type="number" name="n2" id="n2" onChange={change} />
    <button onClick={add}>Add</button>
    </>
)
}
export default Inputs;