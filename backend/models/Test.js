import mongoose from "mongoose";
const { Schema } = mongoose;

const Test = new Schema({
    createdBy: { type: Number, required: true },
    approved: { type: Boolean, required: true },
    title: { type: String, required: true },
    test: [
        {
            question: {
                id: { type: Number, required: true },
                label: { type: String, required: true },
            },
            options: [
                {
                    id: { type: Number, required: true },
                    label: { type: String, required: true },
                },
            ],
            answer: {
                id: { type: Number, required: true },
                label: { type: String, required: true },
            },
        },
    ],
    rating: { type: Number },
    rate_count: { type: Number },
});

export default mongoose.model("Test", Test);
