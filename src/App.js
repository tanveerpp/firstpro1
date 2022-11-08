import React from "react";
//import Child from "./components/Child";
import { data } from "./components/Data";
import './App.css';
import Lang from "./components/Lang";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from "./components/Card";
import Inputs from "./components/Inputs";
import AddProduct from "./components/AddProduct";
import Child from "./components/Child";
var sub=['java,python'];
var rl=101;
var fee=25000;
const App=()=>{
  return(
    <>
    <Child roll={rl} name="ajay" fees={fee} subjects={sub} />
    <Child/>
    </>
  )
}
export default App;
