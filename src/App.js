import React from 'react'
import { Component } from 'react/cjs/react.production.min'
// import { useState, useEffect } from 'react'
// import Selectbtn from './Selectbtn';
import { Link } from "react-router-dom";
import CurrentlyReading from "./CurrentlyReading";
import WantToRead from "./WantToRead";
import Read from "./Read";
import * as BooksAPI from './BooksAPI'
import './App.css'
import {  Route } from 'react-router-dom'
import Searchpage from './searchpage'


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
      Readbooks: books.filter((e)=>{return e.shelf === "read"})}))})}


      updatebookshelf = (book, shelf)=>{
          this.setState((pre)=>({
           books : pre.books.filter(e=>{
             return e.id !== book.id 
           })
          }))
        

        BooksAPI.update(book, shelf)
        
        }
      



  render(){

    const {books , CurrentlyReadingbooks,WantToReadbooks,Readbooks} = this.state 
    return (
      <div className="app">

          <Route exact path='/' render={() => (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              
              
              <div>
                <CurrentlyReading
                books= {books}
                CurrentlyReadingbooks= {CurrentlyReadingbooks}
                updatebookshelf = {this.updatebookshelf}
                />
                <WantToRead
                books= {books}
                WantToReadbooks= {WantToReadbooks}
                updatebookshelf = {this.updatebookshelf}
                />
                <Read
                books= {books}
                Readbooks= {Readbooks}
                updatebookshelf = {this.updatebookshelf}
                />
              </div>


              
            </div>
            <div className="open-search">
              <Link to = '/search'><button>Add a book</button> </Link>
            </div>
          </div>  
        )}
        />
        <Route  path='/search'
        render={() => (
            <Searchpage 
            books= {books}
            // updatebookshelf = {this.updatebookshelf}
            />
            )} 
        />
        {/* <Route  
        render={() => (
            <Selectbtn 
            books= {books}
            updatebookshelf = {this.updatebookshelf}
            />
            )} 
        /> */}
        
        
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

//  componentDidupdate(){
//    BooksAPI.update( this.state.books.map(e=>e.id), 'wantToRead')
//    .then((books)=>{
//      this.setState((pre)=>({
//       WantToReadbooks: pre.books.filter(e=>e.shelf === "wantToRead")
//      }))
//    })
//  }

export default BooksApp;
