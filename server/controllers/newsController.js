import newsModel from "../models/newsModel.js";
import userModel from "../models/userModel.js";
import mongoose from "mongoose";

export const getAllNewsController = async (req, res) => {
    try {
        const news = await newsModel.find({});
        if (!news) {
            return res.status(401).send({
                success: false,
                message: "No news found"
            });
        }
        return res.status(200).send({
            success: true,
            newsCount: news.length,
            message: "All news list",
            news
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while getting news",
            error
        })

    }
}


export const createNewsController = async (req, res) => {
    try {
        const { title, description, image, category } = req.body;
        if (!title || !description || !image || !category) {
            return res.status(401).send({
                success: false,
                message: "Please provide all fields"
            });
        }

        // const existingUser = await userModel.findById(user);
        // if (!existingUser) {
        //     return res.status(404).send({
        //         success: false,
        //         message: "Unable to find user"
        //     })
        // }

        const newNews = new newsModel({ title, description, image, category });
        // const session = await mongoose.startSession();
        // session.startTransaction();
        // await newNews.save({ session });
        // existingUser.news.push(newNews);
        // await existingUser.save({ session });
        // await session.commitTransaction();
        await newNews.save();
        return res.status(200).send({
            success: true,
            message: "News created",
            newNews
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while creating news",
            error
        })
    }
}

export const updateNewsController = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, image, category } = req.body;
        const news = await newsModel.findByIdAndUpdate(id, { ...req.body }, { new: true })
        return res.status(200).send({
            success: true,
            message: "News updated successfully",
            news
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while updating news",
            error
        })
    }
}

export const getNewsByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const news = await newsModel.findById(id);
        if (!news) {
            return res.status(401).send({
                success: false,
                message: "News not found"
            });
        }
        return res.status(200).send({
            success: true,
            message: "Single news fitched ",
            news
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while getting single news",
            error
        })

    }
}

export const deleteNewsController = async (req, res) => {
    try {
        await newsModel.findByIdAndDelete(req.params.id);
        return res.status(201).send({
            success: true,
            message: "News deleted successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while deleting news",
            error
        })
    }
}