import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true
    },

    // news: [
    //     {
    //         type: mongoose.Types.ObjectId,
    //         ref: "News"
    //     }
    // ],

}, { timestamps: true });

export default mongoose.model("user", userSchema);