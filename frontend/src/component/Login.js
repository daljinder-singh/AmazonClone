import React from 'react'
import axios from 'axios';
import LeafLet from './leaflet/LeafLet'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom"

const Login = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();

    const history = useHistory();
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const token = await executeRecaptcha(data);
       const response =  await axios.post('http://localhost:4000/loginUser', {
            data,
            token
        })
        console.log(response.data)
        if(response.status === 200){
            let user = {
                id : response.data.userId,
                email : response.data.userEmail
            }
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('userInfo',  JSON.stringify(user))
        }
    };
    return (
        <div>
            <form className="mx-5 my-5" onSubmit={handleSubmit(onSubmit)}>
            <label>Email: </label>
                <input {...register("email", {
                    required: "Enter your e-mail",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Enter a valid e-mail address",
                    }
                })} />
                {errors.email && <p className="error">{errors.email.message}</p>}
                <label>Password: </label>
                <input {...register("password", {
                    required: "Enter your password",
                    minLength: {
                        value: 4,
                        message: "Password must have at least 4 characters"
                    }
                })} />
                {errors.password && <p className="error">{errors.password.message}</p>}
                <button>Continue</button>
            </form>
            <button onClick={() => history.push('/registration')}>Create your account</button>
            <LeafLet />
        </div>
    )
}
export default Login