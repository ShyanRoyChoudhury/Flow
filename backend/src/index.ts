import express, { Request, Response } from "express";
import dotenv from 'dotenv'
dotenv.config()
import { agenda } from "./utils/agenda";
import './jobs/sendMail';
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;



app.post('/email-scheduler', async (req: Request, res: Response)=>{
    const {time ,text, subject, to} = req.body;
    await agenda.schedule(`in ${time}`, 'send-email', { text, subject, to})
    res.json('Success')
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