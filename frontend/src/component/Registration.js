import React from 'react'
import axios from 'axios';
import { useForm } from "react-hook-form";

const Registration = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data) => {
         await axios.post('http://localhost:4000/registerUsers', data)
    };
    return (
        <div>
            <form className="mx-5 my-5" onSubmit={e => e.preventDefault()}>
                <label>Email:</label>
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
                <button onClick={handleSubmit(onSubmit)} >Continue</button>
            </form>
        </div>
    )
}
export default Registration