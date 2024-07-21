import React, { useContext, useState } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../App'
function Login() {
    const [loginRegister,setloginRegister] = useState('login')
    const [email,setemail] = useState('')
    const [name,setname] = useState('')
    const [password,setpassword] = useState('')
    const [message,setmessage] = useState('')
    
    const navigate = useNavigate()
    const {setusername} = useContext(UserContext)
    console.log(loginRegister)

    const Submit =()=>{
      // for registeration
      if(loginRegister==='register'){
        if(name !=='' && email !=='' && password !==''){
            if(email.includes('@gmail.com')){
              const data = {
                email:email,
                name:name,
                password:password
              }
              axios.post('http://127.0.0.1:8000/auth/register/',data)
              .then((response)=>{
                setmessage(response.data.msg)
                setpassword('')
              }).catch((error)=>{
                  setmessage(error.response.data.error.email)
              })
              return 1
            }else{
              setmessage('* email is invalid')
              return 1
            }
        }
        setmessage('* field should not be empty')
      }
      // for login
      else if(loginRegister==='login'){
        if(email !=='' && password !==''){
          if(email.includes('@gmail.com')){
            const data = {
              email:email,
              password:password
            }
            axios.post('http://127.0.0.1:8000/auth/login/',data)
            .then((response)=>{
              console.log(response.data)
              localStorage.setItem('access',response.data.token.access)
              // localStorage.setItem('refresh',response.data.token.refresh)
              setmessage(response.data.msg)
              setpassword('')

              axios.get('http://127.0.0.1:8000/auth/profile/', {
                headers: {
                    'Authorization': `Bearer ${response.data.token.access}`,   
                }
            })
            .then((res) => setusername(res.data.name))
            .catch((err) => console.error(err));

              navigate('/')
            }).catch((error)=>{
                setmessage(error.response.data.msg)
            })
            return 1
          }
          setmessage('email is invalid')
        }
      }
    }

  return (
    <>
        <div className='login_container'>
            <div className='login_form'>
            <p>{message}</p>
                {loginRegister==='login'?<span>Login</span>:<span>Register</span>}

                {loginRegister==='login'?<></>:<input type="text" name="" id="" placeholder='Enter Your Name' value={name} onChange={(e)=>{setname(e.target.value)}} />}

                <input type="text" placeholder='Enter Your Email' value={email} onChange={(e)=>{setemail(e.target.value)}} required/>

                <input type="password" placeholder='Enter Your Password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>

                <button className='submit_btn' onClick={Submit}>submit</button>

                {loginRegister==='login'?<span>Not Register ? <span className='login' onClick={()=>setloginRegister('register')}>Register</span></span>:<span>Register already ? <span className='login' onClick={()=>setloginRegister('login')}>Login</span></span>}
            </div>
        </div>
    </>
  )
}

export default Login