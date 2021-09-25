import React, { useState } from 'react'
import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha
  } from 'react-google-recaptcha-v3';
import { useHistory } from "react-router-dom"

const Login =() => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const history = useHistory();
    const [email, setemail] = useState('')
    const handleChange = (e) =>{
        e.preventDefault()
        setemail(e.target.value)
    }
    const continueBtn = async (e) =>{
        e.preventDefault()
        const token = await executeRecaptcha('yourAction');
        console.log(token)
    }

    return (
        <div>
            <form className = "mx-5 my-5">
                <label>Email: </label>
                <input type = "text"
                value = {email}
                onChange = {handleChange}
                />
                <button onClick = {continueBtn}>Continue</button>                
            </form>
            <button onClick = {() => history.push('/registration')}>Create your account</button>
        </div>
    )
}
export default Login