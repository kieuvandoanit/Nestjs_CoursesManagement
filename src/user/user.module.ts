import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRepository } from './repository.user';
import { UserSchema } from './schemas/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports:[MongooseModule.forFeature([{name: 'User',schema: UserSchema}])],
    controllers:[UserController],
    providers: [UserService, UserRepository],
})
export class UserModule implements NestModule{
    public configure(consumer: MiddlewareConsumer){
        consumer
            // .apply(LoggerMiddleware)
            // .forRoutes(UserController)
    }
}
