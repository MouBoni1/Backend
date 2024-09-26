import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectDB= async()=>{
    try {
        const connection=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`\n Mongodb connected !!! DB HOST: ${connection.connection.host}`)
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR");
        process.exit(1);
        
    }
}

export default connectDB;