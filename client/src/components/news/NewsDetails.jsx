import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';

const NewsDetails = () => {

    const [news, setNews] = useState({});
    const id = useParams().id;
    const [inputs, setInputs] = useState({});
    const [category, setCategory] = useState('');

    const navigate = useNavigate();

    const getNewsDetail = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/news/get-news/${id}`);
            if (data?.success) {
                setNews(data?.news);
                setInputs({
                    title: data.news.title,
                    description: data.news.description,
                    image: data.news.image
                });
                setCategory(data.news.category)

            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getNewsDetail();
    }, [id]);

    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(`/api/v1/news/update-news/${id}`, {
                title: inputs.title,
                description: inputs.description,
                image: inputs.image,
                category
            });
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Layout>
            <div className='min-h-screen bg-gray-200'>
                <div className='flex justify-center'>
                    <form onSubmit={handleSubmit}>
                        <Box
                            border={3}
                            borderRadius={10}
                            padding={3}
                            margin={'auto'}
                            marginTop={'2.5rem'}
                            boxShadow={"10px 10px 20px #ccc"}
                            bgcolor={'white'}
                            height={'fit-content'}
                            marginBottom={3}
                        >
                            <Typography
                                variant='h3'
                                textAlign={'center'}
                                fontWeight={'bold'}
                                padding={3}
                                color={'gray'}
                            >
                                Create News
                            </Typography>

                            <InputLabel
                                sx={{ fontSize: '24px', fontWeight: 'bold' }}
                            >
                                Title
                            </InputLabel>

                            <TextField required sx={{ width: "100%" }} value={inputs.title} name='title' onChange={handleChange} margin='normal' variant='outlined' />

                            <InputLabel
                                sx={{ fontSize: '24px', fontWeight: 'bold' }}
                            >
                                Description
                            </InputLabel>
                            <TextField required sx={{ width: "100%" }} value={inputs.description} name='description' onChange={handleChange} margin='normal' variant='outlined' />

                            <InputLabel sx={{ fontSize: '24px', fontWeight: 'bold' }}>Category</InputLabel>

                            <select value={category} onChange={(e) => setCategory(e.target.value)} className='w-full py-3 outline-gray-400'>
                                <option value="">{!category ? "Select" : category}</option>
                                <option value="trending">Trending</option>
                                <option value="mostviewed">Most Viewed</option>
                            </select>

                            <InputLabel
                                sx={{ fontSize: '24px', fontWeight: 'bold' }}
                            >
                                Image URL
                            </InputLabel>
                            <TextField required sx={{ width: "100%" }} value={inputs.image} name='image' onChange={handleChange} margin='normal' variant='outlined' />

                            <Button type='submit' color='primary' variant='contained' className='w-full'>SUBMIT</Button>

                        </Box>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default NewsDetails
