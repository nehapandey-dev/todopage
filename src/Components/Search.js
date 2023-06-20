import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = () => {
    return (
        <div className='flex gap-4 font bg-slate-100 w-72 p-2 rounded-md mr-52'>  
                <span><CiSearch className='' /></span>
                <input type="text" placeholder='Search for anything...' className='text-sm bg-neutral-100' />
        </div>
    )
}

export default Search