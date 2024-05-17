
import Agenda  from "agenda"
const mongoString = process.env.DB_URL as string;
// import nodemailer from 'nodemailer';
export const agenda = new Agenda({
    db: {address: mongoString} 
});


(async function (){
    await agenda.start()
    console.log('job started')
    
    await agenda.cancel({})
    console.log('jobs cleared')
})()
