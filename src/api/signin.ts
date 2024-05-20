import { backendURL } from "@/lib/config";
import axios from "axios";

type signinDataType = {
    username: string;
    password: string;
}

async function signinApi(signInData: signinDataType){
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
      data,
      withCredentials: true
    };
    
    return axios.request(config)
    .then((response) => {
      localStorage.setItem('token',response.data.token)
      return response;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });

}

export default signinApi;