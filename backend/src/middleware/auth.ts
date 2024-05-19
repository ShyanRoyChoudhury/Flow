import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import '../config';
const secret = process.env.SECRET as string;

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies['token'];
    if(token){
        const decoded = jwt.verify(token, secret) as JwtPayload;
        if(decoded && decoded.userId){
            next()
        }else{
            res.status(433).json({
                message: 'Invalid token'
            })
        }
    }else{
        res.status(433).json({
            message: 'token error'
        })
    }
}