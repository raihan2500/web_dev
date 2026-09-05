import React from 'react'

function SearchBar(props) {
  return (
    <div>
      <input 
        type="text" placeholder='Codeforces Handle'
        value={props.handle}
        onChange={(event)=>props.sethandle(event.target.value)}
      />
      <button onClick={()=>props.onSearch()} >Search</button>
    </div>
  )
}

export default SearchBar