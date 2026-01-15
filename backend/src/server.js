import express from "express"
import routes from "./routes/routes.js"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import cors from "cors"

dotenv.config()
const app=express()

app.use(cors())
app.use(express.json())
connectDB()

app.use("",routes)

app.listen(process.env.PORT, () => {
    console.log("listening")
})
