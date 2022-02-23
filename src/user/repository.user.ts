import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import {ObjectId} from 'mongodb'
import { User } from './interfaces/user.interface';

@Injectable()
export class UserRepository {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  public async create(data: User): Promise<User> {
    let item = new this.userModel(data);
    return await item.save();
  }

  public async findByUsername(username: string): Promise<User> {
    let user = await this.userModel.findOne({ username: username });
    return user ?? null;
  }

  public async getAllUser():Promise<User[]>{
    const user = await this.userModel.find();
    return user;
  }

  public async update(id: string, info:User):Promise<User>{
    const {email, fullname, password} = info;

    const filter = {_id: new ObjectId(id)};
    const update = {
      email: email,
      fullname: fullname,
      password: password
    };
    
    const user = await this.userModel.findOneAndUpdate(filter, update);
    
    return user;
  }

  public async delete(id: string):Promise<any>{
    const _id = new ObjectId(id);
    
    const result = await this.userModel.deleteOne(_id);
    
    return result;
  }
  
}
