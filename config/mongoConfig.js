import mongoose from "mongoose";
import * as dotenv from 'dotenv'
dotenv.config()
// mongoose.set("strictQuery", false);

// Connection for the mongoDb 
const connectToMongo = async () => {
    try {
       await mongoose.connect(`${process.env.MONGO_URL}`)
       console.log("<-<-<-<-<-<-<-<- mongoDb successfully connected ->->->->->->->->");
    } catch (error) {
        console.log(">>>>>>>error", error);
    }
}

connectToMongo()

export const { Schema, model } = mongoose