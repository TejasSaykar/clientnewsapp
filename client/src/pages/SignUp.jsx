import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/v1/auth/signup", {
                name, email, password, phone
            })
            if (data && data?.success) {
                toast.success("SignUp successful !")
                navigate('/signin');
            } else {
                toast.error("All fields are required !")
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Layout title={"Daily News - SingUp"}>
            <div className='flex justify-center items-center min-h-screen bg-gray-200 pt-8 pb-3'>
                <div className='bg-white w-full mx-16 my-6 text-black h-1/2 lg:h-1/2 p-4 lg:w-1/3 rounded-lg shadow-lg'>
                    <h2 className='text-2xl font-medium text-center'>Sign Up</h2>
                    <form>
                        <div className='pt-3 flex flex-col justify-center'>
                            <label htmlFor="nameLabel" className='text-lg ml-2 mb-2'>Enter Your Name : </label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='mx-2 text-black p-2 rounded bg-indigo-50 outline-none focus:outline-indigo-500 placeholder:text-gray-500 placeholder:font-medium' placeholder='Enter Name' autoFocus />
                        </div>
                        <div className='pt-3 flex flex-col justify-center'>
                            <label htmlFor="nameLabel" className='text-lg ml-2 mb-2'>Enter Your Email : </label>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='mx-2 text-black p-2 rounded bg-indigo-50 outline-none focus:outline-indigo-500 placeholder:text-gray-500 placeholder:font-medium' placeholder='Enter Email' />
                        </div>
                        <div className='pt-3 flex flex-col justify-center'>
                            <label htmlFor="nameLabel" className='text-lg ml-2 mb-2'>Enter Your Password : </label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='mx-2 text-black p-2 rounded bg-indigo-50 outline-none focus:outline-indigo-500 placeholder:text-gray-500 placeholder:font-medium' placeholder='Enter Password' />
                        </div>
                        <div className='pt-3 flex flex-col justify-center'>
                            <label htmlFor="nameLabel" className='text-lg ml-2 mb-2'>Enter Your Phone : </label>
                            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className='mx-2 text-black p-2 rounded bg-indigo-50 outline-none focus:outline-indigo-500 placeholder:text-gray-500 placeholder:font-medium' placeholder='Enter Phone' />
                        </div>
                        <div className='flex flex-col justify-start lg:flex-row'>
                            <button onClick={handleSubmit} className='bg-indigo-500 hover:bg-indigo-700 text-white mx-2 my-3 p-2 rounded lg:px-6 py-3'>SignUp</button>
                            <span className='my-1 mx-8 lg:my-4 lg:mx-0 lg:ml-3'>Already have an Account ? <Link to='/signin' className='text-indigo-600 font-bold underline'>SignIn</Link></span>
                        </div>
                    </form>

                </div>
            </div>
        </Layout>
    )
}

export default SignUp
