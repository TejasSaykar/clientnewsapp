import mongoose from 'mongoose'

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Description is required!"]
    },

    description: {
        type: String,
        require: [true, "Description is required!"]
    },

    category: {
        type: String,
        require: [true, "Category is required!"]
    },

    image: {
        type: String,
        require: [true, "Image is required!"]
    },
    // user: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "user",
    //     required: [true, 'User id is required']
    // }
}, { timestamps: true })

export default mongoose.model("News", newsSchema);