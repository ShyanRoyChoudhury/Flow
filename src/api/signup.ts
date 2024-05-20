import { backendURL } from "@/lib/config";
import axios from "axios";

type signupDataType = {
    username: string;
    password: string;
}

async function signupApi(signInData: signupDataType){
    const url=`${backendURL}/signup`;
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
      return response;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });

}

export default signupApi;