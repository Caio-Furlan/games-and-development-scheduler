import express from "express"
import session from "express-session"
import dotenv from "dotenv"
import path from "path"

dotenv.config();
const app = express()
const PORT = process.env.PORT_APP

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`)
})
