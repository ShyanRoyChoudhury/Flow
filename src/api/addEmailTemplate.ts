import { backendURL } from "@/lib/config";
import axios from "axios";

interface emailTemplateType{
    templateName: string,
    emailSubject: string,
    emailBody: string
}

function addEmailTemplate(emailTemplate: emailTemplateType) {
  const data = JSON.stringify({
    templateName: emailTemplate.templateName,
    emailSubject: emailTemplate.emailSubject,
    emailBody: emailTemplate.emailBody,
  });

  const url=`${backendURL}/addEmailTemplate`;
  
  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      return response
    })
    .catch((error) => {
      throw new Error(error);
    });
}

export default addEmailTemplate;
