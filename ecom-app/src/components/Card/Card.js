import React, { memo, useContext } from 'react'
import { UserContext } from '../../App'
import './Card.css'
import { NavLink } from 'react-router-dom'
function Card({product}) {
    console.log('card component')
    const {Increase,state,QuantityCounter,Decrease} = useContext(UserContext)
    
  return (
    <>
        <div className='card_container'>
            <div className='card_wrapper'>
                <NavLink to={`/description/${product.id}`}>
                    <div className='image_wrapper'>
                        <img src={`http://127.0.0.1:8000${product.product_image}`} alt='not found'/>
                        <p className='offer_price_off'>20% OFF</p>
                    </div>
                </NavLink>    
                <div className='itemname_description'>
                    <p className='itemname'>{product.product_name}</p>
                    <p className='description'>{product.description}</p>
                </div>
                <div className='price_add_to_cart'>
                    <p><span className='mark_price'>125 ₹</span><span className='selling_price'>{product.price} ₹</span></p>

                    

                    {product.id in QuantityCounter(state)?<>
                                                            <span className='De' onClick={()=>{Decrease(product)}}>-</span>
                                                            {product.id in QuantityCounter(state)?<span className='cart_number' >{QuantityCounter(state)[product.id]}</span>:<div></div>}
                                                            <span className='In' onClick={()=>{Increase(product)}}>+</span>
                                                        </>
                                                            :
                                                            <button onClick={()=>{Increase(product)}}>Add</button>}
                
                </div>
            </div>
        </div>
    </>
  )
}

export default memo(Card)