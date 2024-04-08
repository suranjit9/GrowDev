"use server"

import { connectToDatabase } from "@/database/mongoose"
import User from "@/database/user.model";

export const getUserById = async(params:any)=>{
    try {
        connectToDatabase();
        const {userId} = params;
        const user = await User.findOne({clerkId: userId});
        return user;
    } catch (error) {
        console.log(error)
        throw error
    }
}