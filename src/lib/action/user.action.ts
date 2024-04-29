
"use server"

import { connectToDatabase } from "@/database/mongoose"
import User from "@/database/user.model";
import { CreateUserParams, DeleteUserParams, UpdateUserParams } from "./shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

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
export const createUser = async(userData:CreateUserParams)=>{
    try {
        connectToDatabase();
        const newUser = await User.create(userData);
        return newUser;
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const updatedUser = async(Params:UpdateUserParams)=>{
    try {
        connectToDatabase();

        const {clerkId, updateData, path} = Params;
       await User.findOneAndUpdate({clerkId: clerkId}, updateData,{new: true});
       revalidatePath(path);

    } catch (error) {
        console.log(error)
        throw error
    }
}
export const deleteUser = async(Params:DeleteUserParams)=>{
    try {
        connectToDatabase();
        const {clerkId} = Params;
        const user = await User.findOneAndDelete({clerkId: clerkId});
        if (!user) {
            throw new Error('User not found');
        }
        // Delete user from the database
        // and delete question , answer and comment from the database
        // get all questions
        const userQuestionsIds = await Question.find({author: user._id}).distinct("_id");
        // await Question.deleteMany({ _id: { $in: userQuestionsIds } });
        await Question.deleteMany({ author: user._id });
        // Todo: delete answers, comments, etc.
        const deletedUser = await User.findOneAndDelete(user._id);
        return deletedUser;
    } catch (error) {
        console.log(error)
        throw error
    }
}