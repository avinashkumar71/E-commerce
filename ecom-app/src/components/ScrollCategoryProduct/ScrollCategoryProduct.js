import React, { useContext,useState ,useEffect} from 'react'
import './ScrollCategoryProduct.css'
import Card from '../Card/Card'
import { UserContext } from '../../App'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
function ScrollCategoryProduct({cat}) {
    const [number,setnumber] = useState(0)
    const {data} = useContext(UserContext)
  
      const Right =()=>{
        if(number<6){
          setnumber(number+1)
        }
      }
      const Left =()=>{
        if(number>0){
          setnumber(number-1)
        }
      }

      const styles ={
        transform:`translateX(${-(number*120)}px)`
      }
  return (
    <>
      <div className='scroll_container'>
              <div className='scroll_heading'><h2>{cat.category_name}</h2><NavLink to="category-all"><p>See All</p></NavLink></div>
                <div className='scroll_wrapper'>
                  <div className='scroll_products' style={styles}>
                    {data.map((item)=>{
                      if(item.category===cat.id){
                        return <Card product={item}/>
                      }
                    })}
                  </div>
                <div className='scroll_btn'>
                  {number==0?<div></div>: <button onClick={Left} className='scroll_btn_left'><i class="fa-solid fa-play"></i></button>}
                  {number==6?<div></div>:<button onClick={Right}><i class="fa-solid fa-play"></i></button>}
                </div>
              </div>  
        </div>
    </>
  )
}

export default ScrollCategoryProduct