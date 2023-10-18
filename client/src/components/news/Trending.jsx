import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import axios from 'axios'
import '../styles/trending.css'

const Trending = () => {

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/trending`)
            .then((res) => {
                setLoading(true)
                setNews(res.data);
                setLoading(false)
            }).catch((err) => console.log(err));
    }, [])

    return (
        <Layout title={"Daily News - Trending News"}>
            <div className='w-full pt-10 bg-gray-200 min-h-screen'>
                <h2 className='text-center text-2xl font-bold'>Trending News</h2>
                {/* <h2 className='text-lg font-medium mt-16 text-black text-center'>Loading....</h2> */}
                {
                    !loading ? (<div className='newsContainer flex lg:flex lg:flex-wrap lg:justify-center'>
                        {
                            news.map((news) => (
                                <div key={news.id} className='item w-1/3 m-auto bg-white p-3 my-3 mx-2'>
                                    <h2 className='text-xl font-bold mb-2'>{news.heading}</h2>
                                    <img src={news.img} className='w-full h-[400px] mb-2' alt={news.heading} />
                                    <h3 className='text-lg font-semibold text-gray-700'>{news.content}</h3>
                                </div>
                            ))
                        }
                    </div>) : <h2 className='text-lg font-medium text-black text-center'>Loading....</h2>
                }

            </div>
        </Layout>
    )
}

export default Trending
