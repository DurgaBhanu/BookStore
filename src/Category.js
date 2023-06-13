const Category = ({category, setCategory})=>{
  return (
    <div className="category">
      <h2>Category</h2>
      <label>
      <input 
         type = "radio"
         name = "category"
         value = "Biography"
         checked={category === 'Biography'} 
         onChange={(e)=>setCategory("Biography")}
          />
        Biography
        </label><br />
        <label>
        <input 
         type = "radio" 
         name = "category" 
         value = "adventure"
         checked={category === 'adventure'} 
         onChange={(e)=>setCategory("adventure")} 
         />

        Adventure
        </label><br />
        <label>
        <input
         type = "radio" 
         name = "category" 
         value = "Mystery" 
         checked={category === 'Mystery'} 
         onChange={(e)=>setCategory("Mystery")} 
         />
         Mystery
        </label><br />

        <button onClick={()=>setCategory('')}>Clear Filter</button>

    </div>
  )
}

export default Category;
