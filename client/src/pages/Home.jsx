import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import "../components/styles/HomeStyle.css"
import axios from 'axios'
import NewsCard from '../components/news/NewsCard'

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState([]);

    const getAllNews = async () => {
        try {
            const { data } = await axios.get("/api/v1/news/all-news");
            if (data?.success) {
                setNews(data?.news)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllNews();
    }, [])

    setTimeout(() => {
        setLoading(false);
    }, 200);


    return (
        <Layout title={"Daily News - Latest News"} description={"This is the page where all latest news are available"}>
            {
                loading ? <h2 className='font-medium text-lg text-center min-h-screen bg-gray-200 text-black pt-16'>Loading...</h2>
                    :
                    (
                        <div className='main w-full min-h-screen lg:mt-3 pt-9 px-8 flex flex-row justify-center bg-gray-200 p-4 text-black'>
                            <div className='left max-h-none bg-white min-h-fit w-[200px] '>
                                <div className='heading'>
                                    <h1 className='text-center mt-3 pb-2 text-xl font-bold'>Latest News</h1>
                                </div>
                                <div className='heading1 mx-2 mb-2'>
                                    <h2 className=' text-sky-500 font-medium text-lg py-2'>INDIA NEWS</h2>
                                    <p className='font-medium'>Evening briefing: PM Modi hails 'The Vaccine War', Sikkim govt warns explosives along Teesta and all the latest news</p>
                                    <h4 className='font-semibold mt-2 text-gray-500'>Published 21 mins ago</h4>
                                </div>
                                <hr />
                                {/* <div className='heading1 mx-2 mt-3 mb-2'>
                        <h2 className=' text-sky-500 font-medium text-lg'>INDIA NEWS</h2>
                        <p className='font-medium'>MEA calls out Canada's 'interference in internal matters', seeks mission staff reduction</p>
                        <h4 className='font-semibold mt-2 text-gray-500'>Published 29 mins ago</h4>
                    </div> */}
                                <hr />
                                <div className='heading1 mx-2 mt-3'>
                                    <h2 className=' text-sky-500 font-medium text-lg'>SPORTS</h2>
                                    <p className='font-medium'>3 continents, 6 countries: All you need to know about FIFA's plan for the 2030 World Cup</p>
                                    <h4 className='font-semibold py-2 text-gray-500'>Published 53 mins ago</h4>
                                </div>
                            </div>


                            <div className='flex flex-col'>
                                {news && news.map((singleNews) => (
                                    <NewsCard
                                        title={singleNews.title}
                                        description={singleNews.description}
                                        image={singleNews.image}
                                        time={singleNews.createdAt}
                                        id={singleNews._id}
                                    />
                                ))}
                            </div>


                            <div className='right bg-white w-[300px]'>
                                <h3 className='text-center font-semibold mt-2 text-gray-500 py-2'>Advertisement</h3>
                                <div className='advertise'>
                                    <img src="images/admage2.jpg" alt="Advertise" className='advertise mb-3' />
                                    <img src="images/advertiseImage.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>
                    )
            }

        </Layout>
    )
}

export default Home
