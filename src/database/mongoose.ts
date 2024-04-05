import mongoose from "mongoose";

let isConnected:boolean = false;

export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true);

    if (!process.env.MONGODB_API) {
        console.log(' Missing MONGODB_API');
    }
    if (isConnected) {
        return console.log('Mongodb is already connected');
        
    }
    try {
        await mongoose.connect(process.env.MONGODB_API!,{
            dbName: 'growdev',
        });
        isConnected = true;
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log('MongoDB connection error: ', error);
    }
}