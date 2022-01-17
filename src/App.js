import React from 'react'
import { Component } from 'react/cjs/react.production.min'
import { useState, useEffect } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {  Route } from 'react-router-dom'
import Searchpage from './searchpage'
import Mainpage from './mainpage'


class BooksApp extends Component {

state = {
  books :[],
  CurrentlyReadingbooks :[],
  WantToReadbooks : [],
  Readbooks:[],
  
}
componentDidMount(){
  BooksAPI.getAll()
    .then((books) =>{
    this.setState(()=>({
      books,
      CurrentlyReadingbooks: books.filter((e)=>{return e.shelf === "currentlyReading"}),
      WantToReadbooks: books.filter((e)=>{return e.shelf === "wantToRead"}),
      Readbooks: books.filter((e)=>{return e.shelf === "read"})
    }))

  })
 }

//  componentDidupdate(){
//    BooksAPI.update( this.state.books.map(e=>e.id), 'wantToRead')
//    .then((books)=>{
//      this.setState((pre)=>({
//       WantToReadbooks: pre.books.filter(e=>e.shelf === "wantToRead")
//      }))
//    })
//  }
 


 

  render()
  {  
    const {books , CurrentlyReadingbooks,WantToReadbooks,Readbooks} = this.state 
    return (
      <div className="app">

          <Route exact path='/' render={() => (
          <Mainpage
          books= {books}
          CurrentlyReadingbooks= {CurrentlyReadingbooks}
          WantToReadbooks= {WantToReadbooks}
          Readbooks= {Readbooks}/>
        )}
        />
        <Route  path='/search'
        render={() => (
            <Searchpage/>
            )} 
        />
        
      </div>
    )
  }
}








// const BooksApp = () =>{

// const [books, setbooks] = useState([]);
// const [CurrentlyReadingbooks, setCurrentlyReadingbooks] = useState([]);
// const [WantToReadbooks, setWantToReadbooks] = useState([]);
// const [Readbooks, setReadbooks] = useState([]);




// useEffect(()=>{
//   BooksAPI.getAll().then((books) => {
//     setbooks(books);
//     setCurrentlyReadingbooks(books.filter((e)=>{return e.shelf === "currentlyReading"}));
//     setWantToReadbooks(books.filter((e)=>{return e.shelf === "wantToRead"}));
//     setReadbooks(books.filter((e)=>{return e.shelf === "Read"}))
//      })
//  }, [] );

// // function currentlyReadingshelf(){
// //        setCurrentlyReadingbooks((pre)=>({
// //        CurrentlyReadingbooks: pre.books.filter((e)=>{return e.shelf === "currentlyReading"})
// //      }))
      
// //    } 
//   //  function wantToReadshelf(){
//   //     setWantToReadbooks((pre)=>({
//   //     WantToReadbooks: pre.books.filter((e)=>{return e.shelf === "wantToRead"})
      
//   //   }
//   //   ))
//   // } 
//   // function Readshelf(){
//   //   setReadbooks((pre)=>({
//   //     Readbooks: pre.books.filter((e)=>{return e.shelf === "Read"})
//   //   }))
//   // } 

// return (

// <div className="app">



//          <Route exact path='/' render={() => (
//           <Mainpage
//           books= {books}
//           CurrentlyReadingbooks= {CurrentlyReadingbooks}
//           WantToReadbooks= {WantToReadbooks}
//           Readbooks= {Readbooks}
//           // currentlyReadingshelf = {currentlyReadingshelf}
//           // wantToReadshelf= {wantToReadshelf}
//           // Readshelf = {Readshelf}
          
//           />
//         )}
//         />
//         <Route  path='/search'
//         render={() => (
//             <Searchpage/>
//             )} 
//         />
        
//       </div>

// )


// }


export default BooksApp;
