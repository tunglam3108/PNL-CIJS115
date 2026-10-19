import React from 'react'
import "./styles.css";
const SearchAndNew = () => {
  return (
    <div className='SearchAndNew'>
      <div className='search'>
        <input type="text" placeholder='Search item' className='searchBroder'/>
      </div>
      <div className='new'>
        <button className='color'>New item</button>
      </div>
    </div>
  )
}

export default SearchAndNew;