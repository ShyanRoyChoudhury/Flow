import axios from "axios"

type emailDataType = {
    messageBody: string;
    Subject: string;
    to: string[];
    time: string;
}
async function scheduleEmail(emailData: emailDataType){
    const url=`${process.env.backendURL}/email-schedule`
    try{
        const response = await axios.post(url, emailData, {
            headers:{
                'Content-Type': 'application/json',
            }
        })
        return response.data
    }catch(e){
        console.error('Failed to schedule email', e);
        
    }
}

export default scheduleEmail