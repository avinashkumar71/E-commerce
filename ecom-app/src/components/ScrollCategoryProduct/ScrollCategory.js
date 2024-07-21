import {React,useEffect,useState} from 'react'
import ScrollCategoryProduct from './ScrollCategoryProduct'
import axios from 'axios'

function ScrollCategory() {
    const [category,setcategory] = useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/category/')
        .then((response)=>{
            // const cate = response.data.slice(0,3)
            setcategory(response.data.slice(0,3))
        }).catch((error)=>{
            console.log(error)
        })
    },[])
  return (
    <>
        {category.map((item)=>{
            return <ScrollCategoryProduct cat={item}/>
        })  
      }
    </>
  )
}

export default ScrollCategory