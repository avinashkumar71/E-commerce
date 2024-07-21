import React, { useContext, useEffect, useState } from 'react'
import './Category.css'
import axios from 'axios'
import { UserContext } from '../../App'
import Card from '../Card/Card'
function Category() {
    const [category,setcategory] = useState([])
    const [searchitem,setsearchitem] = useState([])
    const {text,data} = useContext(UserContext)

    useEffect(()=>{
        let lowertext = text.toLowerCase();
        const y = data.filter((item)=>{
                return item.description.toLowerCase().includes(lowertext)
        })
        setsearchitem(y)
    },[text])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/category/')
        .then((response)=>{
            setcategory(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])

    const CategoryWiseItem =(cat_id)=>{
        const products_cat_wise = data.filter((item)=>{
            return item.category === cat_id
        })
        setsearchitem(products_cat_wise)
    }

  return (
    <>
        <div className='category_container'>
            <div className='category_wrapper '>
                <div className='category_col '>
                    <h2>Category</h2>
                    {category.map((item)=>{
                        return(
                            <p onClick={()=>{CategoryWiseItem(item.id)}}>{item.category_name}</p>
                        )
                    })}
                </div>
                <div className='category_products_col'>
                    {searchitem.map((item)=>{
                        return <Card product={item}/>
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default Category