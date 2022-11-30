import dotenv from 'dotenv';

// loads env vars defined in .env file
dotenv.config();

export const MONGO_URI = process.env.MONGO_URI as string;
export const PORT = process.env.PORT;
export const STATUS = {
    SUCCESS: 'success',
    ERROR: 'error'
};
export const STATUS_CODE = {
    OK: 200,
    CLIENT_ERROR: 400,
    INTERNAL_SERVER_ERROR: 500
};