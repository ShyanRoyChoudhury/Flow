import {rateLimit} from 'express-rate-limit';


export const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 50, 
    message: 'Too many requests, please try again after 5 minutes',
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
})