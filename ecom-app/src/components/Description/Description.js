import React, { useContext } from 'react'
import './Description.css'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../App'
function Description() {
  console.log('description component')
  const {data,Decrease,Increase,QuantityCounter,state} = useContext(UserContext)
  const param = useParams()
  // console.log('data------>',data)
  const Individual_product = data.find((item)=>item.id===Number(param.product_id))
  // console.log(Individual_product)
  return (
    <>  
        <div className="description_container">
          <div className='description_wrapper'>
            <div className='description_left_part'>
                <div className='description_image'>
                    <img src={`http://127.0.0.1:8000${Individual_product.product_image}`} alt="" />
                </div>
                <div className='description_text'>
                  <p className='description_brand_name'>{Individual_product.product_name}</p>
                  <p className='description_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque asperiores quidem dicta eaque, vero error velit accusamus, consectetur in excepturi odio assumenda laudantium a sit?</p>
                </div>
            </div>
            <div className='description_right_part'>
                <div className='brand_name'>
                    <h3>brand name</h3>
                    <p>View by all brand name</p>
                </div>
                <div className='mrp_quantity_addtocart'>
                    <div className='mrp_quantity'>
                      <p>{Individual_product.price} ₹</p>
                      <div className='increase_and_decrease'>
                        {Individual_product.id in QuantityCounter(state)?<p className='decrease' onClick={()=>{Decrease(Individual_product)}}>-</p>:<p className='decrease'>-</p>}<span>{Individual_product.id in QuantityCounter(state)?QuantityCounter(state)[Individual_product.id]:0}</span><p className='increase' onClick={()=>{Increase(Individual_product)}}>+</p>
                      </div>
                      <p className='tax_text'>( inclusive all taxes )</p>
                    </div>
                    <div className='description_add_to_cart'>
                      <button onClick={()=>{Increase(Individual_product)}}>Add to cart</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Description