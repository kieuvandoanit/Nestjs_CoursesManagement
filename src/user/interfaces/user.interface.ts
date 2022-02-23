import {Document} from 'mongoose';

export interface User{
    fullname: string;
    username: string;
    email: string;
    password: string;
}