import newsModel from "../models/newsModel.js";

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
        const { title, description, image } = req.body;
        if (!title || !description || !image) {
            return res.status(401).send({
                success: false,
                message: "Please provide all fields"
            });
        }
        const newNews = await new newsModel({ title, description, image }).save();
        return res.status(200).send({
            success: true,
            message: "News created",
            newNews
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: true,
            message: "Error while creating news",
            error
        })
    }
}

export const updateNewsController = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, image } = req.body;
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