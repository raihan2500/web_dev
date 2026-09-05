
function SearchBar(props) {
  
  return (
    <div>
      <input 
        type="text" placeholder='Enter the username' 
        onChange={(event)=>props.setHandle(event.target.value)}
        onKeyDown={(event)=>{if(event.key == "Enter"){props.searchHandle();}}}
     />
      <button onClick={()=> props.searchHandle()} >Search</button>
    </div>
  )
}

export default SearchBar