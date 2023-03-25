import dotenv from 'dotenv';
import assert from "assert";
import sql from "mssql";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import eventRoutes from "./routes/eventRoutes.js";
import config from "./config.js";



const app = express();

dotenv.config();
const {PORT, HOST} = process.env;
// const sqlEncrypt = process.env.DB_ENCRYPT === "true";

assert(PORT, 'PORT is require');
assert(HOST, 'HOST is required');

const corsOptions ={
    origin:['http://localhost:3000']
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());
app.use("/api", eventRoutes);


sql.on('error', err =>{
    console.log(err.message);
})

async function Start()
{
    try {
        await sql.connect(config.sql)
            .then(() => console.log("DataBase connected!"))
            .catch((err) => console.log(err));

        app.listen(PORT, ()=>{
            console.log(`Server has been started on port ${PORT}`);
        })
    }
    catch (err) {
        console.log(err);
        sql.close();
    }
}

app.get('/', (req, res)=>{
    return res.send("Start server with MS SQL Server");
})

await Start();
