import mongoose from "mongoose";
import 'dotenv/config';
import { MONGO_URI } from "#/utils/variable";

mongoose.connect(MONGO_URI)
.then(() => {
    console.log("Db is connected")
})
.catch((err) => {
    console.log('Db connection failed: ', err);
})
