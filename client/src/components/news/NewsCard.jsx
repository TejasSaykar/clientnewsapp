import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import moment from 'moment';
import { useSelector } from 'react-redux';




export default function NewsCard(props) {

    const isLogin = useSelector(state => state.isLogin);
    const [error, setError] = React.useState(false);

    let username = localStorage.getItem("userName");

    const navigate = useNavigate();
    const handleEdit = () => {
        setError(false);
        navigate(`${import.meta.env.VITE_BASE_URL}/news-details/${props.id}`);
    }



    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/v1/news/delete-news/${id}`);
            if (data?.success) {
                toast.success(data.message);
                window.location.reload();
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Card sx={{ mx: 2, height: "fit-content" }} className='lg:w-[700px] lg:m-auto, mt-2'>
            {props.isUser &&
                <Box display={'flex'}>
                    <IconButton onClick={handleEdit} sx={{ ml: "auto" }}>
                        <ModeEditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(props.id)}>
                        <DeleteIcon />
                    </IconButton>
                </Box>}
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
                subheader={`Published ${moment(props.time).fromNow()}`}
            />
            <CardMedia
                component="img"
                sx={{ width: 500, margin: 'auto', height: 300 }}
                className='rounded-sm'
                image={props.image}
                alt="Paella dish"
            />
            <CardContent>

                <Typography variant="h6" color="text.secondary">
                    Title : {props.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
                <Typography variant='span' color={'skyblue'} className='font-semibold cursor-pointer' onClick={() => navigate(isLogin ? `/news/${props.id}` : '/signin')} >
                    Read More....
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton>
                    👎
                </IconButton>
            </CardActions>
            {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                        stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and
                        peppers, and cook without stirring, until most of the liquid is absorbed,
                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                        mussels, tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don&apos;t open.)
                    </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                </CardContent>
            </Collapse> */}
        </Card>
    );
}








// import React from 'react'
// import { Link } from 'react-router-dom'

// const NewsCard = () => {

//     const id = 1;

//     return (
//         <div>
//             <div className='middle min-h-none bg-white w-[700px] mx-4 pb-8'>
//                 <h1 className='text-center mt-3 text-2xl font-bold'>Top News</h1>
//                 <div className='mx-4 shadow-xl p-3 px-4 rounded-lg mt-2'>
//                     <h2 className='text-xl font-bold'>Delhi court grants ED custody of AAP MP Sanjay Singh till October 10.....<Link to={`/news/:${id}`} className='text-sky-500 underline text-sm'>Read More</Link></h2>
//                     <h3 className='text-sky-500 font-medium mt-2'>India News : <span className='font-semibold mt-2 text-gray-500'>Updated 1 min ago</span></h3>
//                     <img src="images/topHeadline.jpg" alt="Image" className='w-full mt-3 rounded-lg' />
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default NewsCard

