import React, { useState } from 'react'

const Registration =() => {
    const [UserInfor, setUserInfor] = useState({
        email:'',
        password:''
    })
    const handleChange = (e) =>{
        setUserInfor(preState => ({...preState, [e.target.name]: e.target.value}))
    }
    const submitForm = (e) =>{
        e.preventDefault()
        console.log(UserInfor)
    }
    return (
        <div>
            <form className = "mx-5 my-5">
                <label>Email: </label>
                <input type = "text"
                name = 'email'
                value = {UserInfor.email}
                onChange = {handleChange}
                />
                  <label>Password: </label>
                <input type = "text"
                name = 'password'
                value = {UserInfor.password}
                onChange = {handleChange}
                />
                <button onSubmit ={submitForm}>Continue</button>                
            </form>
        </div>
    )
}
export default Registration    