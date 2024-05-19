import express, { Request, Response } from "express";
import { agenda } from "./utils/agenda";
import './jobs/sendMail';
import { z } from "zod";
import cors from 'cors';
import { PrismaClientManager } from "./prisma";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import './config';
import { authenticateJWT } from "./middleware/auth";
import cookieParser  from 'cookie-parser';

const secret = process.env.SECRET as string;
const app = express();
const prisma = PrismaClientManager.getInstance();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use((_req, res, next)=> {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
    next();
});


const PORT = process.env.PORT || 3000;

const emailObject = z.object({
    time: z.string(),
    text: z.string(),
    subject: z.string(),
    to: z.string().array()
})

const signupObject = z.object({
    username: z.string({
            required_error: "username is required",
    }).min(4),
    password: z.string({
        required_error: "password is required"
    }).min(4)
})

app.post('/signup', async (req: Request,res: Response)=>{
    const parsedInput = signupObject.safeParse(req.body);
    if(!parsedInput.success){
        return res.status(422).json({
            error: parsedInput.error
        });
        
    }
    const username = parsedInput.data.username;
    const password = await bcrypt.hash(parsedInput.data.password, 10);
    const user = await prisma.user.create({
        data:{
            username,
            password
        }
    })
    if(!user){
        res.json({
            message: "Email already taken / Incorrect inputs"
        })
    }else{
        res.json({
            message: 'User created successfully'
        })
    }
})

app.post('/signin', async (req: Request,res: Response)=>{
    const parsedInput = signupObject.safeParse(req.body);
    if(!parsedInput.success){
        return res.status(422).json({
            error: parsedInput.error
        });
        
    }
    const username = parsedInput.data.username;
    const password = parsedInput.data.password;
    const user = await prisma.user.findUnique({
        where:{
            username,
        }
    })
    if(!user){
        res.json({
            message: "User not found"
        })
    }else{
        const valid = await bcrypt.compare(password, user.password);
        if(!valid){
            return res.status(403).json({
                message: "invalid password"
            });
        }

        const token = jwt.sign({userId:user.id}, secret, {expiresIn: '1h'});
        res.cookie('token',token);
        res.json({
            message: 'Login successful'
        });
    }
})

app.post('/email-scheduler', authenticateJWT, async (req: Request, res: Response)=>{
    const parsedInput = emailObject.safeParse(req.body);
    if(!parsedInput.success){
        return res.status(400).json({
            message: parsedInput.error
        })
    }
    const {time ,text, subject, to} = req.body;
    await agenda.schedule(`in ${time}`, 'send-email', { text, subject, to})
    res.json({
        message: 'Success'
    });
})


app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
})


async function graceful() {
    console.log('agenda stopped')
    await agenda.stop();
    process.exit(0)
}


process.on('SIGINT', graceful);
process.on('SIGTERM', graceful);


export default app;