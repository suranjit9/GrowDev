"use server"

import { connectToDatabase } from "@/database/mongoose"
import Question from "@/database/question.model";
import Tag from "@/database/tag.model";
import { CreateQuestionParams, GetQuestionsParams } from "./shared.types";
import User from "@/database/user.model";
import { revalidatePath } from "next/cache";


export const getQuestions = async(params:GetQuestionsParams)=>{
    try {
        connectToDatabase();
        const questions = await Question.find({})
        .populate({path: "tags", model:Tag})
        .populate({path: "author", model:User})
        .sort({createdAt: -1})
        return questions;
    } catch (error) {
        console.log(error)
        throw error
    }
}


export const createQuestion = async(params:CreateQuestionParams)=>{
    try {
        connectToDatabase();
        // create a question in the database
        const { title, content, author, tags, path } = params;
    // create a question in the database 
        const question = await Question.create({
            title,
            content,
            author
            
        })
        // add tags to the question & update the question
        const tagDocument = [];

        for (const tag of tags) {
            // console.log("Tag:", tag); // Add this line for debugging
            if (typeof tag !== 'string' || tag.trim() === '') {
                // console.log("Invalid tag:", tag);
                continue; // Skip invalid tags
            }
            const existingTag = await Tag.findOneAndUpdate(
                { name: {$regex: new RegExp(`^${tag}$`, 'i')} },
                {$setOnInsert:{name:tag}, $push: {question: question._id}},
                { upsert: true, new: true }
            )
              tagDocument.push(existingTag._id)  
        
    } 
    await Question.findByIdAndUpdate(
        question._id,
        {$push:{tags:{$each:tagDocument}}}
    ); 
    // don't relode the page after creating a question
    revalidatePath(path);

    } catch (error) {
       console.log(error) 
    }
}