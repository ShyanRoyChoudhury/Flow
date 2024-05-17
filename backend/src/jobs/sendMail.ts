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
        user: '26.shyan.roychoudhury@gmail.com',
        pass: 'clkv zcxp akmt swzi'
    },

})


agenda.define('send-email', async(job: Job<JobAttributes>, done)=>{
    console.log('inside agenda call');
    const {subject, to, text} = job.attrs.data;
    await transporter.sendMail({to, subject, text}, (error, info)=>{
        if(error instanceof Error){
            throw new Error(error.message)
        }
        console.log('info:', info)
    })
    done()
})
