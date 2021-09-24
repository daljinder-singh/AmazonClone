import React, { useState } from 'react'
import { useHistory } from "react-router-dom"

const Login =() => {
    const history = useHistory();
    const [email, setemail] = useState('')
    const handleChange = (e) =>{
        e.preventDefault()
        setemail(e.target.value)
    }

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
            <button onClick = {() => history.push('/registration')}>Create your account</button>
        </div>
    )
}
export default Login