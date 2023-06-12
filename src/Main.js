import {books} from "./BookData"

const Main = ()=>{
   
    
    return(
        <div>
            

          <article className="book-list">
            {books.map((book)=>{
                return(
                    <div className="book" key = {book.id}  >
                        <img src = {book.img} alt = {book.title}/>
                        <h1>{book.title}</h1>
                    </div>
                )
            })}
        </article>
        </div>
    )
}

export default Main;