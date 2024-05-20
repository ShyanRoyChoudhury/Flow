import axios from "axios"
import {backendURL} from '../lib/config';
type emailDataType = {
    messageBody: string;
    subject: string;
    to: string[];
    time: string;
}
async function scheduleEmail(emailData: emailDataType){
    const url=`${backendURL}/email-scheduler`
    try{
        const data = JSON.stringify({
            "time": emailData.time,
            "text": emailData.messageBody,
            "subject": emailData.subject,
            "to": emailData.to
          });
          
          const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url,
            headers: { 
              'Content-Type': 'application/json',
              'authorization': `Bearer ${localStorage.getItem('token')}`
            },
            data : data,
            withCredentials: true
          };
          
          return axios.request(config)
          .then((response) => {
            return response;
          })
          .catch((error) => {
            throw new Error(error)
          });
          

    }catch(e){
        console.error('Failed to schedule email', e);
    }
}

export default scheduleEmail