import { z } from "zod";

export const emailObject = z.object({
    time: z.string(),
    text: z.string(),
    subject: z.string(),
    to: z.string().array()
})

export const signupObject = z.object({
    username: z.string({
            required_error: "username is required",
    }).min(4),
    password: z.string({
        required_error: "password is required"
    }).min(4)
})

export const emailTemplateObject = z.object({
    templateName: z.string({
        required_error: "Template name can't be empty"
    }),
    emailSubject: z.string({
        required_error: "Email Subject can't be empty"
    }),
    emailBody: z.string({
        required_error: "Email Body can't be empty"
    })
})

