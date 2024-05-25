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

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/addEmailTemplate",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return response
    })
    .catch((error) => {
      throw new Error(error);
    });
}

export default addEmailTemplate;
