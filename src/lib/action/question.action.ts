"use server"

import { connectToDatabase } from "@/database/mongoose"
import Question from "@/database/question.model";
import Tag from "@/database/tag.model";


export const createQuestion = async(params:any)=>{
    try {
        connectToDatabase();
        // create a question in the database
        const { title, content, author, tags, path } = params;
    // create a question in the database 
        const question = await Question.create({
            title,
            content,
            author,
            tags,
            path
        })
        // add tags to the question & update the question
        const tagDocument = [];
       
        
        for (const tag of tags) {
            const existingTag = await Tag.findOneAndUpdate(
                {
                    name: {$regex: new RegExp(`^${tag}$`, "i")}
                },
                {
                    $setonInsert: {
                        name: tag
                    },$push: {
                        question: question._id
                    }
                },
                {upsert: true, new: true}
            )
            tagDocument.push(existingTag._id)
        
    } 
    await question.updateOne(question._id, {
        $push: {
            tags: {$each: tagDocument}
        }
    })

    } catch (error) {
       console.log(error) 
    }
}