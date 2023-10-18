import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDb from './config/db.js';
import authRoute from './routes/authRoute.js';
import newsRoute from './routes/newRoute.js'


const app = express();

// Middlewares
app.use(express.json());
app.use(cors());


// Config env
dotenv.config();

// Calling database
connectDb();


// Routing
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/news", newsRoute);



app.get("/", (req, res) => {
    res.send("Hello from home of server");
});

app.get("/api/v1/trending", (req, res) => {
    res.send([
        {
            id: 1,
            heading: "News Heading",
            img: "/images/admage2.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint debitis tempora magnam, fugiat consectetur atque, iusto vel similique, pariatur architecto? Debitis consequuntur tempore atque eaque voluptatum, dolores voluptas voluptatibus ullam nisi repudiandae perspiciatis minus!"
        },
        {
            id: 2,
            heading: "News Heading",
            img: "/images/topHeadline.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint debitis tempora magnam, fugiat consectetur atque, iusto vel similique, pariatur architecto? Debitis consequuntur tempore atque eaque voluptatum, dolores voluptas voluptatibus ullam nisi repudiandae perspiciatis minus!"
        },
        {
            id: 3,
            heading: "News Heading",
            img: "/images/advertiseImage.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint debitis tempora magnam, fugiat consectetur atque, iusto vel similique, pariatur architecto? Debitis consequuntur tempore atque eaque voluptatum, dolores voluptas voluptatibus ullam nisi repudiandae perspiciatis minus!"
        },
        {
            id: 4,
            heading: "News Heading",
            img: "/images/topHeadline.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint debitis tempora magnam, fugiat consectetur atque, iusto vel similique, pariatur architecto? Debitis consequuntur tempore atque eaque voluptatum, dolores voluptas voluptatibus ullam nisi repudiandae perspiciatis minus!"
        },
        {
            id: 5,
            heading: "News Heading",
            img: "/images/admage2.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint debitis tempora magnam, fugiat consectetur atque, iusto vel similique, pariatur architecto? Debitis consequuntur tempore atque eaque voluptatum, dolores voluptas voluptatibus ullam nisi repudiandae perspiciatis minus!"
        },
        {
            id: 6,
            heading: "News Heading",
            img: "/images/advertiseImage.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint debitis tempora magnam, fugiat consectetur atque, iusto vel similique, pariatur architecto? Debitis consequuntur tempore atque eaque voluptatum, dolores voluptas voluptatibus ullam nisi repudiandae perspiciatis minus!"
        },
    ])
});

app.get("/api/v1/mostviewed", (req, res) => {
    res.send([
        {
            id: 1,
            heading: "News Heading",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint debitis tempora magnam, fugiat consectetur atque, iusto vel similique, pariatur architecto? Debitis consequuntur tempore atque eaque voluptatum, dolores voluptas voluptatibus ullam nisi repudiandae perspiciatis minus! Iusto placeat vero, perferendis, eius cum doloribus sint saepe, incidunt eaque magnam harum tempore praesentium."
        },
        {
            id: 2,
            heading: "News Heading",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint debitis tempora magnam, fugiat consectetur atque, iusto vel similique, pariatur architecto? Debitis consequuntur tempore atque eaque voluptatum, dolores voluptas voluptatibus ullam nisi repudiandae perspiciatis minus! Iusto placeat vero, perferendis, eius cum doloribus sint saepe, incidunt eaque magnam harum tempore praesentium."
        },
        {
            id: 3,
            heading: "News Heading",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sint debitis tempora magnam, fugiat consectetur atque, iusto vel similique, pariatur architecto? Debitis consequuntur tempore atque eaque voluptatum, dolores voluptas voluptatibus ullam nisi repudiandae perspiciatis minus! Iusto placeat vero, perferendis, eius cum doloribus sint saepe, incidunt eaque magnam harum tempore praesentium."
        }
    ])
})


const port = 8080;

app.listen(port, () => {
    console.log(`Serve on http://31.220.58.235/:${port}`);
})