import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom'
import '../styles/HeaderStyle.css'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Box } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import moment from 'moment'
import toast from 'react-hot-toast'

const News = () => {


    // const [comments, setComments] = useState('');
    // const [random, setRandom] = useState(1);
    // const [like, setLike] = useState(5);
    // const [dislike, setDislike] = useState(2);
    // const [data, setData] = useState([
    //     {
    //         id: 1,
    //         comments: "Nice info",
    //         like: 1,
    //         dislike: 0
    //     }
    // ])

    // const handleClick = () => {
    //     setRandom(random + 1)
    //     setData((prev) => [...prev, { id: random, comments: comments }]);
    //     setComments('')
    // }

    const { id } = useParams();
    const [news, setNews] = useState({});

    const getSingleNews = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/news/get-news/${id}`);
            if (data?.success) {
                setNews({
                    title: data.news.title,
                    description: data.news.description,
                    image: data.news.image,
                    time: data.news.createdAt
                })
            } else {
                toast.error("Something went wrong")
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSingleNews();
    }, [id])



    return (
        <Layout title={"Daily News - Single News"}>
            <div className='main w-full min-h-screen lg:mt-3 pt-9 px-8 flex flex-row justify-center bg-gray-200 p-4 text-black'>
                <div className='left max-h-none bg-white min-h-fit w-[200px] p-3'>
                    <div className='heading'>
                        <h1 className='text-center mt-3 text-xl font-bold'>Top News</h1>
                    </div>
                    <div className='heading1 mx-2 mb-2'>
                        <h2 className=' text-sky-500 font-medium text-lg'>INDIA NEWS</h2>
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
                        <h4 className='font-semibold mt-2 text-gray-500'>Published 53 mins ago</h4>
                    </div>
                </div>


                <div className='middle'>
                    <Box>
                        <Card sx={{ mx: 2, height: "fit-content" }} className='lg:w-[700px] lg:m-auto, mt-2'>
                            {/* <Box display={'flex'}>
                                <IconButton onClick={handleEdit} sx={{ ml: "auto" }}>
                                    <ModeEditIcon />
                                </IconButton>
                                <IconButton>
                                    <DeleteIcon onClick={() => handleDelete(props.id)} />
                                </IconButton>
                            </Box> */}
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        A
                                    </Avatar>
                                }
                                // action={
                                //     <IconButton aria-label="settings">
                                //         <MoreVertIcon />
                                //     </IconButton>
                                // }
                                title={"Admin"}
                                subheader={`Published ${moment(news.time).fromNow()}`}
                            />
                            <CardMedia
                                component="img"
                                sx={{ width: "fit-content", margin: 'auto' }}
                                className='rounded-sm'
                                image={news.image}
                                alt="Paella dish"
                            />
                            <CardContent>

                                <Typography variant="h6" color="text.secondary">
                                    Title : {news.title}
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    {news.description}
                                </Typography>
                                {/* <Typography variant='span' color={'skyblue'} className='font-semibold' onClick={() => navigate(`/news/${id}`)}>
                                    Read More....
                                </Typography> */}
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton>
                                    👎
                                </IconButton>
                            </CardActions>
                        </Card >
                    </Box>
                </div>


                {/* <div className='middle min-h-none bg-white w-[700px] mx-4 pb-8'>
                    <div className='mx-4 p-3 px-4 rounded-lg mt-2'>
                        <h2 className='text-xl font-bold'>Delhi court grants ED custody of AAP MP Sanjay Singh till October 10</h2>
                        <hr className='my-3' />
                        <h3 className='font-semibold text-gray-500'>Oct 06, 2023 11:17 AM IST</h3>
                        <h4 className='font-semibold text-xl text-gray-700 my-3'>Radicals in Surrey BC are running a campiagn saying that Canadian intelligence asked Sikhs to remain safe as Indian agents are out to kill particular members.</h4>
                        <img src="/images/topHeadline.jpg" alt="Image" className='w-full mt-3 rounded-lg' />
                        <h2 className='text-sm text-gray-700'>Posters calling for the assassinations of Indian diplomats were put back at Surrey Gurudwara two days after they were pulled down.</h2>

                        <h4 className='font-semibold text-xl text-gray-700 my-3'>
                            The radical Sikh activity against India and in support of so-called Khalistan continues unabated in British Columbia in Canada with posters calling for the assassinations of Indian diplomats posted in the country back at the Surrey Gurudwara two days after they were pulled down. The Guru Nanak Sikh Gurudwara at Surrey was under the management of Khalistan Tiger Force terrorist Hardeep Singh Nijjar before he was gunned down on June 18, 2023.
                        </h4>

                        <div className='flex justify-around my-3'>
                            <h2 className='font-semibold text-xl' onClick={() => setLike(like + 1)}> <button className='bg-indigo-300 p-2 px-4 rounded-xl'> 👍 </button>  : {like} </h2>
                            <h2 className='font-semibold text-xl' onClick={() => setDislike(dislike + 1)}> <button className='bg-indigo-300 p-2 px-4 rounded-xl'>👎</button>  : {dislike} </h2>
                        </div>

                        <h2 className='font-semibold mx-2'>Leave Your Comment Here : </h2>
                        <input type="text" value={comments} onChange={(e) => setComments(e.target.value)} placeholder='Comment' className='outline-none focus:outline-indigo-400 rounded-lg my-2 py-2 placeholder:font-medium placeholder:text-indigo-500 px-3 bg-indigo-200 lg:w-[80%] ' autoFocus />
                        <button className='bg-indigo-400 mx-2 p-2 rounded-lg px-3  cursor-pointer' disabled={!comments} onClick={handleClick}>Submit</button>

                        <div className='bg-gray-300 p-2 rounded-sm'>
                            {
                                data.map((comment) => (
                                    <h4 key={comment.id}>{comment.comments}</h4>
                                ))
                            }
                        </div>





                    </div>

                </div> */}


                <div className='right bg-white w-[300px]'>
                    <h3 className='text-center font-semibold mt-2 text-gray-500 py-2'>Advertisement</h3>
                    <div className='advertise'>
                        <img src="/images/admage2.jpg" alt="Advertise" className='advertise mb-3' />
                        <img src="/images/advertiseImage.jpg" alt="Image" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default News
