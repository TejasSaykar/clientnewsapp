import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { authActions } from '../redux/store';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/v1/auth/signin", {
                email, password
            });
            if (data && data.success) {
                toast.success(data && data.message);
                localStorage.setItem("userId", data?.user._id);
                localStorage.setItem("userName", data?.user.name)
                dispatch(authActions.login())
                navigate("/");
            } else {
                toast.error(data && data.message)
            }

        } catch (error) {
            console.log(error)
        }
    }



    return (
        <Layout title={"Daily News - SignIn"}>
            <div className='flex justify-center items-center min-h-screen mt-0 bg-gray-200'>
                <div className=' text-black w-full mx-10 bg-white items-center h-[350px] lg:h-1/2 p-4 lg:w-1/3 rounded-lg shadow-lg'>
                    <h2 className='text-2xl font-medium text-center'>Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='pt-3 flex flex-col justify-center'>
                            <label htmlFor="nameLabel" className='text-lg ml-2 mb-2'>Enter Your Email :- </label>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='mx-2 text-black p-2 rounded bg-indigo-50 outline-none focus:outline-indigo-500 placeholder:text-gray-500 placeholder:font-medium' placeholder='Enter Email' autoFocus />
                        </div>

                        <div className='pt-3 flex flex-col justify-center'>
                            <label htmlFor="nameLabel" className='text-lg ml-2 mb-2'>Enter Your Password :- </label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='mx-2 text-black p-2 rounded bg-indigo-50 outline-none focus:outline-indigo-500 placeholder:text-gray-500 placeholder:font-medium' placeholder='Enter Password' />
                        </div>

                        <div className='flex flex-col justify-start lg:flex-row'>
                            <button className='bg-indigo-500 hover:bg-indigo-700 text-white px-3 mx-2 my-3 p-1 rounded lg:px-6 py-3'>Sign In</button>
                            <span className='mx-8 my-1 lg:my-4 lg:ml-3 lg:mx-0'>Dont't have an Account ? <Link to='/signup' className='text-indigo-600 font-bold underline'>SignUp</Link></span>
                        </div>
                    </form>


                </div>
            </div>
        </Layout>
    )
}

export default SignIn
