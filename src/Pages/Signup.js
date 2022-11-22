import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useToken from '../hooks/useToken';

const Signup = () => {
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const { createUser, updateUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signupError, setSignupError] = useState('');
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate();

    if (token) {
        navigate('/')
    }

    const handleSignup = data => {
        setSignupError('')
        createUser(data.email, data.password)
            .then(result => {
                toast.success('User Created Successfully')
                const userInfo = { displayName: data.name }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => {
                setSignupError(err.message)
            })
    }


    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('https://doctor-server-six.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    }


    return (
        <div className='h-[800px]  flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className="text-4xl">Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register('name')} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-700 py-2'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register('email', { required: 'Email is required' })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-700 py-2'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register('password', { required: 'Password is Required', minLength: { value: 6, message: 'Password must be 6 character' } })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-700 py-2'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forget password</span>
                        </label>
                    </div>
                    <input className='btn btn-accent w-full my-3' type="submit" value='Sign Up' />
                    {
                        signupError && <p className='text-red-600 py-3'>{signupError}</p>
                    }
                    <p>Already Have an Account  <Link className='text-secondary' to='/login'>Login Here</Link></p>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline w-full">Continue With Google</button>
                </form>
            </div>
        </div>
    )
}

export default Signup