import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    priority: {
        type: String,
        enum: ['HIGH', 'MEDIUM', 'LOW'],
    },
    status: {
        type: String,
        enum: ['Todo', 'InProgress', 'Completed']
    }
});

const TodoModel = mongoose.model('TODO', TodoSchema);

export { TodoModel }