import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/base/base.service';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './interfaces/user.interface';
import { UserRepository } from './repository.user';



@Injectable()
export class UserService{
    
    constructor(private userRepository: UserRepository){}

    public async create({fullname, email, username, password}): Promise<any>{

        // let userAgo = await this.userRepository.findByUsername(username);

        // if(userAgo === null){
        //     return "Username is already exists!";
        // }

        const user:User = {fullname, email, username, password};
        let newUser = await this.userRepository.create(user);

        return newUser;
    }

    public async getAllUser():Promise<User[]>{
        const user:User[] = await this.userRepository.getAllUser();

        return user;
    }
}
