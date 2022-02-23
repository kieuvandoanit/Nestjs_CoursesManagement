import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {ConfigModule} from '@nestjs/config'
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://doankv:doan1999@doankv.s9mmf.mongodb.net/NestJS_CoursesManagement?retryWrites=true&w=majority',{
      autoCreate: true
    }),
    ConfigModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
