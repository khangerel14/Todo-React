import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    priority: {
        type: String,
        enum: ['HIGH', 'MEDIUM', 'LOW'],
    },
    label: String,
});

const TodoModel = mongoose.model('TODO', TodoSchema);

export { TodoModel }