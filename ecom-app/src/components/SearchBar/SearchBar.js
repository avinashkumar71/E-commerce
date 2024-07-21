import React, { memo, useContext } from 'react'
import { UserContext } from '../../App'
function SearchBar() {
    console.log('search bar compo')
    const {SearchProduct} = useContext(UserContext)
  return (
    <div className='nav_second_part'>
        <div className='nav_search'>
            <span><i class="fa-solid fa-magnifying-glass"></i></span>
            <input type="text" name="" id="" placeholder='search your items' onChange={(e)=>SearchProduct(e.target.value)}/>
        </div>
    </div>
  )
}

export default memo(SearchBar) 