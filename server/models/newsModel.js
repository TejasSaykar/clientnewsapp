import mongoose from 'mongoose'

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Description is require"]
    },

    description: {
        type: String,
        require: [true, "Description is require"]
    },

    image: {
        type: String,
        require: [true, "Image is require"]
    }
}, { timestamps: true })

export default mongoose.model("News", newsSchema);