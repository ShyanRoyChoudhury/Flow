import { agenda } from "../utils/agenda";
import { Job } from "agenda";
import nodemailer from 'nodemailer';
interface JobAttributes {
    to: string;
    subject: string;
    text: string;
  }


  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASSWORD
    },

})


agenda.define('send-email', async(job: Job<JobAttributes>, done)=>{
    const {subject, to, text} = job.attrs.data;
    await transporter.sendMail({to, subject, text}, (error,)=>{
        if(error instanceof Error){
            throw new Error(error.message)
        }
        // console.log('info:', info)
    })
    done()
})
