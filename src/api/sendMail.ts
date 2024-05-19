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
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          return axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
          

    }catch(e){
        console.error('Failed to schedule email', e);
    }
}

export default scheduleEmail