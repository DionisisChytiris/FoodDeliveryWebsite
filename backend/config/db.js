import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://dionysis:Denis00Chyt!@cluster0.1cbtupe.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
