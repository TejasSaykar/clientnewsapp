import React from 'react'
import Layout from '../components/Layout/Layout'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <Layout>
            <div className='min-h-screen bg-gray-200'>
                <div className='flex flex-col justify-center items-center'>
                    <h3 className='text-2xl font-bold mt-36 text-center'>404 Page Not Found</h3>

                    <button onClick={() => navigate("/")} className='bg-black text-white p-2 px-4 w-1/6 my-3 rounded-xl'>Go Back</button>

                </div>
            </div>
        </Layout>
    )
}

export default PageNotFound
