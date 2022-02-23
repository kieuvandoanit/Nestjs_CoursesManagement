import {Inject} from '@nestjs/common';
import {BaseRepository} from './base.repository';


export abstract class BaseService<T>{
    constructor(private baseRepository: BaseRepository<T>){
    }
}