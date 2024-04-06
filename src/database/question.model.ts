
import { Schema, models, model, Document } from "mongoose";

export interface Question extends Document {
    _id: string;
    title: string;
    content: string;
    views: number;
    tags: Schema.Types.ObjectId[];
    upvotes: Schema.Types.ObjectId[];
    downvotes: Schema.Types.ObjectId[];
    author: Schema.Types.ObjectId;
    answers: Schema.Types.ObjectId[];
    createdAt: Date;

}

const QuestionSchema = new Schema<Question>({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tags: [{
        type: Schema.Types.ObjectId,
        ref: "Tag"
    }],
    views: {
        type: Number,
        default: 0
    },
    upvotes: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    downvotes: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    answers: [{
        type: Schema.Types.ObjectId,
        ref: "Answer"
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }

})
const Question = models.Question || model<Question>("Question", QuestionSchema);

export default Question;