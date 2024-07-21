import React, { memo, useContext} from 'react'
import Slider from '../Slider/Slider'
import { UserContext } from '../../App'
import SearchItem from '../SearchItem/SearchItem'
import Category from '../Category/Category'
import ScrollCategoryProduct from '../ScrollCategoryProduct/ScrollCategoryProduct'
import ScrollCategory from '../ScrollCategoryProduct/ScrollCategory'
function Home() {
  const {data,text} = useContext(UserContext)
  
  return (
    <>  
        
        {text!==''?<Category/>:<><Slider/>
          <SearchItem data={data}/><ScrollCategory/> </>}
        
    </>
  )
}

export default memo(Home)