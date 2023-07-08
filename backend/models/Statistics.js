import mongoose from "mongoose";
const { Schema } = mongoose;

const Statistics = new Schema({
    userCount: {
        type: Number,
        required: true,
    },
    raiting: {
        type: Number,
        required: true,
    },
    rateCount: {
        type: Number,
        required: true,
    },
    testId: {
        type: Number,
        required: true,
    },
    answerStatistic: [
        {
            question: {
                type: Number,
                required: true,
            },
            options: [
                {
                    id: {
                        type: Number,
                        required: true,
                    },
                    selectCount: {
                        type: Number,
                        required: true,
                    },
                },
            ],
        },
    ],
});


export default mongoose.model('Statistic', Statistics)