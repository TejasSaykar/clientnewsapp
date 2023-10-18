import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import axios from 'axios'

const MostViewed = () => {

    const [mostViewed, setMostViewed] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(mostViewed)

    const mostView = async () => {
        setLoading(true)
        const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/news/all-news`);
        if (data && data?.success) {
            setMostViewed(data?.news)
        }
        setLoading(false)
    }


    const filteredData = () => {
        const data = mostViewed.filter(item => item.category === 'mostviewed');
        setFilterData(data);
        console.log(data)
    }


    useEffect(() => {
        filteredData();
        mostView();

    }, [setFilterData, setMostViewed])

    return (
        <Layout title={"Daily News - Most Viewed News"}>
            <div className='w-full pt-10 bg-gray-200 min-h-screen'>
                <h2 className='text-center font-bold text-2xl'>Most Viewed News</h2>
                {
                    loading ? <h2 className='text-lg text-center'>Loading....</h2> : (
                        <div className='mostViewed py-3'>
                            {filterData.map((news) => (
                                // console.log(news.title)
                                <div key={news._id}>
                                    <h3>{news.title}</h3>
                                    <h3>{news.description}</h3>
                                </div>
                            ))}
                        </div>
                    )
                }

            </div>
        </Layout >
    )
}

export default MostViewed
