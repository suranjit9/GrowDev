"use server"

import { connectToDatabase } from "@/database/mongoose"


export const createQuestion = async(params:any)=>{
    try {
        connectToDatabase()
    } catch (error) {
        
    }
}