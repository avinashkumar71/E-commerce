import './App.css';
import Description from './components/Description/Description';
import Home from './components/Home/Home';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import Login from './components/Login/Login';
import Mycart from './components/Mycart/Mycart';
import { useState,useEffect, createContext } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import reducer from './Reducer/Reducer'
import { useReducer } from 'react';
import Category from './components/Category/Category';
export const UserContext = createContext()

function App() {
  console.log('app component')
  const [text,settext] = useState('')
  const [username,setusername] = useState('')
  

  useEffect(()=>{
      const token = localStorage.getItem('access')
      axios.get('http://127.0.0.1:8000/auth/profile/', {
        headers: {
            'Authorization': `Bearer ${token}`,   
        }
    })
    .then((res) => setusername(res.data.name))
    .catch((err) => setusername('session expire login again'));
  },[])
  
  const initialState =[]
       const [state, dispatch] = useReducer(reducer, initialState);  
       const Increase =(product)=>{
        return dispatch({type:'increase',product:product})
      }
      const Decrease =(product)=>{
        return dispatch({type:'decrease',product:product})
      }
      
      function QuantityCounter(current_state){
        const quantity = {}
        for(let item of current_state){
          if(item.id in quantity){
            quantity[item.id] = quantity[item.id] + 1
          }else{
            quantity[item.id] = 1
          }
        }
        return quantity
      }
      
      console.log('app state------>',state)
  
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/products/')
    .then((response)=>{
        setData(...data,response.data)   
    }).catch((error)=>{
        console.log(error)
    })
    },[])

    const SearchProduct =(txt)=>{
        settext(txt)
    }
    
    console.log('token from app',localStorage.getItem('access'))
    console.log('username',username)
  
  return (
    <>
      <UserContext.Provider value={{data,state,Increase,Decrease,QuantityCounter,SearchProduct,text,setusername}}>
        <BrowserRouter>
          <Navbar username={username}/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path="/description" element={<Description />}>
            <Route path=":product_id" element={<Description />} />
            </Route>
            <Route path="/login" element={<Login/>} />
            <Route path="/mycart" element={<Mycart/>} />
            <Route path='/category-all' element={<Category/>}/>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
