import React, { useState } from 'react'
import Joi from "joi-browser";

const Login =() => {
    const [email, setemail] = useState('')
    const handleChange = (e) =>{
        e.preventDefault()
        setstate(e.target.value)
    }
    const schema = Joi.string().max(50).required().email().label("Email")

    return (
        <div>
            <form className = "mx-5 my-5">
                <label>Email: </label>
                <input type = "text"
                value = {email}
                onChange = {handleChange}
                />
                <button >Continue</button>                
            </form>
            <button>Create your account</button>
        </div>
    )
}
export default Login