import React, { memo, useContext, useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import { UserContext } from '../../App'
function Navbar({username}) {
    
    console.log('navbar component')
    const {state} = useContext(UserContext)
    
    // console.log('navbar state',state)
  return (
    <>
        <div className='navbar_container'>
            <nav>
                <div className='nav_first_part'>
                    <div className='nav_first_part_wrapper '>
                        <h2>Bazzar.com</h2>
                        <div className='nav_location'>
                            <p>{username}</p>
                            <span><i class="fa-solid fa-caret-down"></i></span>
                        </div>
                    </div>
                </div>
                <SearchBar/>
                <div className='nav_third_part'>
                    <div className='nav_button'>
                        <NavLink to='login'><button className='login'>Login</button></NavLink>
                        <div className='mycart'>
                            <NavLink to='mycart'><button for="cart">Mycart</button></NavLink><span id='cart'><i class="fa-solid fa-cart-shopping"></i><span className='cart_number'>{state.length}</span></span>
                        </div> 
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}

export default memo(Navbar)