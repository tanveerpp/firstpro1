import React from "react";
const Child=()=>{
    return <h1>Child Component is running</h1>
}
const Ppoint=()=>{
    return(
        <>
        <h1>Ppoint is running</h1>
        <Indore/>
        <Ujjain/>
        </>
    )
}
const Ujjain=()=>{
    return <h1>Ujjain is running</h1>
}
const Indore=()=>{
    return <h1>Indore is running</h1>
}
export default Child;
export {Ppoint,Ujjain,Indore};