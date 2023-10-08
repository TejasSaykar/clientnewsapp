import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import axios from 'axios'

const MostViewed = () => {

    const [mostViewed, setMostViewed] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("/api/v1/mostviewed")
            .then((res) => {
                setLoading(true);
                setMostViewed(res.data);
                setLoading(false);
            }).catch((err) => console.log(err))
    }, [])

    return (
        <Layout title={"Daily News - Most Viewed News"}>
            <div className='w-full pt-10 bg-gray-200 min-h-screen'>
                <h2 className='text-center font-bold text-2xl'>Most Viewed News</h2>
                {
                    loading ? <h2 className='text-lg text-center'>Loading....</h2> : (
                        <div className='mostViewed py-3'>
                            {mostViewed.map((news) => (
                                <div key={news.id} className='mx-4 p-3 my-3 lg:w-1/2 lg:m-auto bg-white lg:p-3 lg:my-2'>
                                    <h1 className='text-xl font-bold my-2'>{news.heading}</h1>
                                    <h3 className='text-lg font-semibold text-gray-700'>{news.content}</h3>
                                </div>
                            ))}
                        </div>
                    )
                }

            </div>
        </Layout>
    )
}

export default MostViewed
