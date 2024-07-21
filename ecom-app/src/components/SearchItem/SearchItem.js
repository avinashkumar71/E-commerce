import React, { memo, useState,useEffect } from 'react'
import './SearchItem.css'
import Card from '../Card/Card'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
// import UserContext from './../../App'
function SearchItem({data}) {
  const [cat,setcat] = useState([])

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/category/')
    .then((response)=>{
        setcat(response.data.slice(0,8))
    }).catch((error)=>{
        console.log(error)
    })
  },[])

  function Randomelement(){
    let arr = []
      for (let i of cat){
        for(let j of data){
          if(i.id===j.category){
            arr.push(j)
            break
          }
        }
      }
      return arr
  }
  console.log('random elelment',Randomelement())
  console.log('searchitem component')
  
  return (
    <>
        <div className='searchitem_container'>
            <div className='searchitem_wrapper'>
            <h2>Top Category</h2>
              <div className='searchitems_products'>
                {Randomelement().map((item)=>{
                  return <Card product={item}/>
                })}
              </div>
            </div>
        </div>
    </>
  )
}

export default memo(SearchItem)