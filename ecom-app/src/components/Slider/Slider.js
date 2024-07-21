import React, { useState,memo, useEffect } from 'react'
import './Slider.css'
import axios from 'axios'


function Slider() {
  console.log('slider component')
    const [sliderImage,setsliderImage] = useState([])
    const [number,setnumber] = useState(0)
    const [right,setright] = useState([0,1])

    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/slider/carousel/')
      .then((response)=>{
          setsliderImage(response.data)
      })
    },[])
    console.log('slider image',sliderImage)

    if(number===3){
      setnumber(2)
    }
    if(number===-1){
      setnumber(0)
    } 
    const Right =()=>{
      if(number<4){
        setnumber(number+1)
      }
    }
    const Left =()=>{
      if(number>-1){
        setnumber(number-1)
      }
    }
    const styles ={
      transform:`translateX(${-(number*1050)}px)`
    }

  return (
    <>
        <div className='slider_container '>
            <div className='slider_wrapper'>
                  <div className='slider' style={styles}>
                    {sliderImage.map((item)=>{
                        return <img src={`http://127.0.0.1:8000${item.image}`} className='image-1' alt="" />
                    })}
                    
                  </div>
            </div>
            <div className='btn'>
              {number in [0]?<div></div>:<button onClick={Left} className='left_button'><i class="fa-solid fa-play"></i></button>}

              {number in [0,1]?<button onClick={Right} className='right_button'><i class="fa-solid fa-play"></i></button>:<div></div>}
                
                
            </div>
        </div>
    </>
  )
}

export default memo(Slider)