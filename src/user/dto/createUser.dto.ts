import { ApiProperty } from '@nestjs/swagger';
import { 
    IsArray, 
    IsNotEmpty, 
    ValidateNested, 
    IsEmail,
    IsInt,
    Length,
    IsDate,
    Min,
    Max,
    IsString
} from 'class-validator';

export class CreateUserDto{

    @ApiProperty({
        default: 'Kiều Văn Đoàn'
    })
    @Length(3,50)
    @IsNotEmpty()
    @IsString()
    fullname: string;

    @ApiProperty({
        default: 'kieuvandoanit@gmail.com'
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        default: 'kieuvandoan'
    })
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty({
        default:'abc'
    })
    @IsNotEmpty()
    @IsString()
    password: string;

    @ApiProperty({
        default:'abc'
    })
    @IsNotEmpty()
    @IsString()
    re_password?: string;

}