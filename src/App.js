import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Search from "./Search";
import { useState } from "react";
import {books} from "./BookData"
import Category from "./Category";


function App() {
  const [search,setSearch] = useState("")
  // eslint-disable-next-line
  const [Books,setBooks] = useState(books)
  const [category,setCategory] = useState("")


  return(
    <div className="main-body">
      <Header />
      <Search  search = {search} setSearch={setSearch}/>
      <div className="container">
        <Category category= {category} setCategory = {setCategory} />
        <div>   
          {category ? 
            <Main 
              books ={Books.filter(Book => ((Book.category).toLowerCase()).includes(category.toLowerCase()))}
            /> :
            <Main 
            books ={Books.filter(Book => ((Book.title).toLowerCase()).includes(search.toLowerCase()))}
          />
          }
          </div>
         
        </div> 
        <Footer />
       

      
      
    </div>
  );
}

export default App
