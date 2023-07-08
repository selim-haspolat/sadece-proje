import mongoose from "mongoose";
const { Schema } = mongoose;

const Answer = new Schema(
    {
        answeredBy: { type: Number, required: true },
        testId: { type: Number, required: true },
        answers: [
            {
                question: {
                    type: Number,
                },
                answer: {
                    type: Number,
                },
            },
        ],
    },
    { timestamps: true }
);

export default mongoose.model("Answer", Answer);