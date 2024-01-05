import mongoose from "mongoose";

const URI = process.env.MONGO_URI as string

mongoose.connect(URI)
.then(() => {
    console.log("Db is connected")
})
.catch((err) => {
    console.log('Db connection failed: ', err);
})
