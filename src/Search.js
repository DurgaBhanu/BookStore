
const Search = ({search,setSearch})=>{
    return(
        <div className="search">
            <input 
                id = "search"
                type = "text"
                role = "searchbox"
                value = {search}
                placeholder="Search books with title"
                onChange = {(e)=>setSearch(e.target.value)}
            />

        </div>
    )
}

export default Search;