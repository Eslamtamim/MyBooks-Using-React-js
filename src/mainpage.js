import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.production.min";
import CurrentlyReading from "./CurrentlyReading";
import WantToRead from "./WantToRead";
import Read from "./Read";

const Mainpage = (props) =>{

return(

    
<div className="list-books">



           {  console.log(props.CurrentlyReadingbooks)}
           {  console.log(props.WantToReadbooks)}
           {  console.log(props.Readbooks)}
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <CurrentlyReading
                
                
                />
                <WantToRead/>
                <Read/>     
              </div>
            </div>
            <div className="open-search">
              <Link to = '/search'><button>Add a book</button> </Link>
            </div>
          </div>


)





}
export default Mainpage;
