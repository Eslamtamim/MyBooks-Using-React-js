import React,{Component} from "react";
import { Link } from "react-router-dom";
// import { search } from "./BooksAPI";
import Selectbtn from "./Selectbtn";
import * as BooksAPI from "./BooksAPI"


class Searchpage extends Component {

    state = {
      query : ""
    }
    updateQuery = (query) => {
      this.setState(() => ({
        query: query.trim(),
      }));
    };
    clearQuery = (query)=>{
      this.setState(()=>({
        query: ""
      }))
    }
    // search = ()=>{
    //   BooksAPI.search()
    //   .then((query)=>{
    //     this.setState(()=>({
    //       query
    //     }))
    //   })
    // }
    // clearQuery = (query)=>{
    //   this.setState(()=>({
    //     query: ""
    //   }))
    // }



    render(){
      const {query} = this.state

      const {books} = this.props

      const showbookstitle = query === "" ? [] : books.filter(e=>e.title.toLowerCase().includes(query.toLowerCase()))
      // const showbooksauthors = query === "" ? []: books.filter(e=>e.authors.join("").toLowerCase().includes(query.toLowerCase())) 
      
  return (
    <div className="search-books">
      <div className="search-books-bar">
        
          <Link  to="/"><button className="close-search">Close</button></Link>
        
        <div className="search-books-input-wrapper">
          <input
          type="text"
          placeholder="Search by title or author"
          value={query}
          onChange={(event)=>this.updateQuery(event.target.value)
          }
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {showbookstitle.map(e=>{
            return(
              <li key={e.id}>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${e.imageLinks.smallThumbnail})`  }}></div>
                              <div className="book-shelf-changer">
                              <Selectbtn/>
                              </div>
                            </div>
                            <div className="book-title">{e.title}</div>
                            <div className="book-authors">{e.authors.join(", ")}</div>
                          </div>
                        </li>
            )
          })

          }
          {/* {showbooksauthors.map(e=>{
            return(
              <li key={e.id}>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${e.imageLinks.smallThumbnail})`  }}></div>
                              <div className="book-shelf-changer">
                              <Selectbtn/>
                              </div>
                            </div>
                            <div className="book-title">{e.title}</div>
                            <div className="book-authors">{e.authors.join(", ")}</div>
                          </div>
                        </li>
            )
          })

          } */}
          </ol>
      </div>
    </div>
  )}
};

export default Searchpage;
