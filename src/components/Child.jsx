import React from "react";
import PropTypes from 'prop-types';
const Child=({roll,name,fees,subjects})=>{
    return (
        <>
        <h1>Child Component is running</h1>
        <h2>ROll : {roll}</h2>
        <h2>NAME : {name}</h2>
        <h2>FEES : {fees*0.90}</h2>
        <h2>SUBJECTS : {subjects}</h2>
        </>
    )
}
Child.propTypes={
    roll:PropTypes.number,
    name:PropTypes.string,
    fees:PropTypes.number,
    subjects:PropTypes.array
}
Child.defaultProps={
    roll:1,
    name:'fullstack',
    fees:250000,
    subjects:['frontend','backend','database']
}
export default Child;
