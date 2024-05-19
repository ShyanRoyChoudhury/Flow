import { backendURL } from "@/lib/config";
import axios from "axios";

type signupDataType = {
    username: string;
    password: string;
}

async function signupApi(signInData: signupDataType){
    const url=`${backendURL}/signin`;
    const data = JSON.stringify({
      "username": signInData.username,
      "password": signInData.password
    });
    
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url,
      headers: { 
        'Content-Type': 'application/json'
      },
      data
    };
    
    return axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

}

export default signupApi;