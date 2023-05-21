import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_DB_INFO}?retryWrites=true&w=majority`
const connectDB = () => {
  return mongoose.connect(url)
}

export default connectDB
