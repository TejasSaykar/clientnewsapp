import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MONGO GOT CONNECTED");
    } catch (error) {
        console.log(error)

    }

}

export default connectDb;