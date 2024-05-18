import express, { Request, Response } from "express";
import dotenv from 'dotenv'
dotenv.config()
import { agenda } from "./utils/agenda";
import './jobs/sendMail';
import {z} from "zod";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
// app.use((req, res, next)=> {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//       );
//     next();
// })


const PORT = process.env.PORT || 3000;

const emailObject = z.object({
    time: z.string(),
    text: z.string(),
    subject: z.string(),
    to: z.string().array()
})

app.post('/email-scheduler', async (req: Request, res: Response)=>{
    const parsedInput = emailObject.safeParse(req.body);
    if(!parsedInput.success){
        return res.status(400).json({
            message: parsedInput.error
        })
    }
    const {time ,text, subject, to} = req.body;
    await agenda.schedule(`in ${time}`, 'send-email', { text, subject, to})
    res.json({
        message: 'Success'
    });
})


app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
})


async function graceful() {
    console.log('agenda started')
    await agenda.stop();
    process.exit(0)
}


process.on('SIGINT', graceful)
process.on('SIGTERM', graceful)


export default app