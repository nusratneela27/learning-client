import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className="hero loginBanner">
            <div className="hero-content flex-col lg:flex-row">

                <div className="card shadow-2xl bg-slate-400 pb-10">
                    <div className='text-center mt-6'>
                        <h1 className='text-4xl font-bold'>Log In</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  {...register("password", { required: true, })} name="password" placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-neutral" type="submit" value="login" />
                        </div>
                    </form>

                    <div className='flex items-center pt-4 space-x-1 ps-4 pe-4'>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        <p className='px-3 text-sm dark:text-gray-950'>Login with social accounts</p>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    </div>
                    <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                        <FaGoogle size={25} />
                        <p>Continue with Google</p>
                    </div>

                    <p className='px-6 text-sm text-center text-gray-950 font-bold'>Don't have an account yet?{' '}
                        <Link to='/signup' className='hover:underline hover:text-emerald-900 text-violet-900'>
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;