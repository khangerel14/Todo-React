import mongoose from "mongoose"

export const connectDataBase = async () => {
    try {
        const MONGODB_URI = 'mongodb+srv://khangerelbeochir:khangerel123api@todo.7lb4qsg.mongodb.net/?retryWrites=true&w=majority'
        await mongoose.connect(MONGODB_URI)
        console.log('Database connection is succesfull'); 
    } catch (error) {
        throw new Error("error");
    }
}
