import express from 'express'
import { createNewsController, deleteNewsController, getAllNewsController, getNewsByIdController, updateNewsController } from '../controllers/newsController.js';

// Router object
const router = express.Router();


// Routes

router.get("/all-news", getAllNewsController);

router.post("/create-news", createNewsController);

router.put("/update-news/:id", updateNewsController);

router.get("/get-news/:id", getNewsByIdController);

router.delete("/delete-news/:id", deleteNewsController);




export default router