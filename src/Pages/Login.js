import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useToken from '../hooks/useToken';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        setLoginError('');

        signIn(data.email, data.password)
            .then(resutl => {
                setLoginUserEmail(data?.email)
            })
            .catch(e => {
                setLoginError(e.message)
            })
    }


    return (
        <div className='h-[800px]  flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className="text-4xl">Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                            <span className="label-text"><Link to='/'>Forget password</Link></span>
                        </label>
                    </div>
                    <input className='btn btn-accent w-full my-3' type="submit" value='Login' />
                    <div className='py-2 text-red-700'>
                        {loginError && <p>{loginError}</p>}
                    </div>
                    <p>New to Doctors Portal  <Link className='text-secondary' to='/signup'>Create New Account</Link></p>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline w-full">Continue With Google</button>
                </form>
            </div>
        </div>
    );
};

export default Login;