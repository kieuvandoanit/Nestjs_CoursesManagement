import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class UpdateUserDto{
    
    @ApiProperty({
        default: 'Kiều Văn Đoàn'
    })
    @IsString()
    @IsNotEmpty()
    @Length(3, 50)
    fullname: string;


    @ApiProperty({
        default: "kieuvandoanit@gmail.com"
    })
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}