import React, { useState } from 'react'

const Search = ({setQuery, searchButtonRef}) => {
    const [search, setSearch] = useState("");

  return (
    <div>
        <div className="flex gap-5 my-5 justify-end">
            <input className="border-2 p-3 border-sky-700" type="text" onKeyDown={ e => e.key === "Enter" ? searchButtonRef.current.click() : ""  } onChange={ e => setSearch(e.target.value) } placeholder="Enter Book Title" />
            <button ref={searchButtonRef} className="p-3 bg-slate-800 text-white" type="button" onClick={e => setQuery(search)}><i className='fa fa-search'></i></button>
        </div>
        
    </div>
  )
}

export default Search