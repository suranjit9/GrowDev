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


export const createQuestion = async(params:CreateQuestionParams):Promise<any>=>{
    try {
        connectToDatabase();
        // create a question in the database
        const { title, content, author, tags, path } = params;
        if (!title || !content || !author || !tags || !path) {
            throw new Error("Invalid parameters")
        }

        const question = await Question.create({
            title,
            content,
            author
        });
        if (!question) {
            throw new Error("Failed to create question");
        }

        // add tags to the question & update the question
        const tagDocument = [];
        for (const tag of tags) {
            if (typeof tag !== 'string' || tag.trim() === '') {
                continue; // Skip invalid tags
            }
            const existingTag = await Tag.findOneAndUpdate(
                { name: {$regex: new RegExp(`^${tag}$`, 'i')} },
                {$setOnInsert:{name:tag}, $push: {question: question._id}},
                { upsert: true, new: true }
            );
            if (!existingTag) {
                throw new Error("Failed to find or create tag")
            }
            tagDocument.push(existingTag._id)
        }
        if (tagDocument.length === 0) {
            throw new Error("No valid tags to add")
        }

        await Question.findByIdAndUpdate(
            question._id,
            {$push:{tags:{$each:tagDocument}}},
            { new: true }
        );

        // don't relode the page after creating a question
        revalidatePath(path);

    } catch (error) {
        console.error(error)
        throw error
    }
}
