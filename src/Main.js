const Main = ({books})=>{
    return(
        <div className="nav" >
          {books.length ?  
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
        : 
            <p>No books found with that Title</p>
       } 

        </div>
    )
}

export default Main;