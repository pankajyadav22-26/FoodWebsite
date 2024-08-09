import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://221220043:Pankaj123@cluster0.otfn9zb.mongodb.net/food_website').then(() =>
        console.log("DB Connected"));
}