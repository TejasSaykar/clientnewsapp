import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Button, InputLabel, Select, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const CreateNews = () => {

    const [inputs, setInputs] = useState({
        title: '',
        description: '',
        image: ''
    });

    const [category, setCategory] = useState('')
    console.log(inputs);
    console.log(category)

    const navigate = useNavigate();


    const handleChange = (e) => {
        // console.log(e.target.value)
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/v1/news/create-news', {
                title: inputs.title,
                description: inputs.description,
                // category: inputs.category,
                image: inputs.image,
                category
            });
            if (data?.success) {
                toast.success(data.message);
                navigate('/')
            }
        } catch (error) {
            console.log(error);
            toast.error("Error while creating the news")
        }
    }

    return (
        <Layout>

            {/* <h3 className='mt-8'>Create News</h3> */}
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
                    className="w-[80%] lg:w-[50%]"
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
                    {/* <Select value={inputs.category} onChange={handleChange}>
                        <Option value='select'>Select</Option>
                        <Option value='trending'>Trending</Option>
                        <Option value='mostviewed'>Most Viewed</Option>

                    </Select> */}

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

        </Layout>
    )
}

export default CreateNews
