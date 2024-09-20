import React from "react"

function SearchBox(){

    return (
        <div className="searchBox w-full px-4 flex items-center justify-center">
            <input type="search" name="searchedProduct" id="search" placeholder="Search products here" className="h-8 w-full mx-3 my-2 rounded-sm px-2 py-2 text-lg bg-gray-200"/>
        </div>
    )
}

export default SearchBox