import { backendURL } from "@/lib/config";
import axios from "axios";

async function getEmailTemplates() {
  const url = `${backendURL}/getemailtemplates`;

  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  try {
    const response = await axios.request(config);
    return response.data.templates;
  } catch (error) {
    console.log(error);
    return []; 
  }
}

export default getEmailTemplates;
