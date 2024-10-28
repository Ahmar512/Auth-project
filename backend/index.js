import express from 'express'
import cookieParser from 'cookie-parser';
import { connectDB } from './db/connectDB.js';
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'
import cors from 'cors'
import path from 'path';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(cors({origin:"http://localhost:5173", credentials:true}));



app.use(express.json());//allows us to parse incoming requests with json payloads
app.use(cookieParser());// allows us to parse incomming cookies

app.use("/api/auth", authRoutes);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

app.listen(PORT, ()=>{
    connectDB();
    console.log("sever is running on port ", PORT);
})


