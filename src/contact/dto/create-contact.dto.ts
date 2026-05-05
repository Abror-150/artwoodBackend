import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class CreateContactDto {
  @ApiProperty({
    example: 'Abdulla',
    description: 'Foydalanuvchi ismi',
  })
  @IsNotEmpty({ message: 'Ism bo‘sh bo‘lmasligi kerak' })
  name: string;

  @ApiProperty({
    example: 'example@gmail.com',
    description: 'Foydalanuvchi email manzili',
  })
  @IsEmail({}, { message: 'Email to‘g‘ri formatda bo‘lishi kerak' })
  email: string;

  @ApiProperty({
    example: 'Salom, men siz bilan bog‘lanmoqchi edim...',
    description: 'Xabar mazmuni',
  })
  @IsNotEmpty({ message: 'Xabar bo‘sh bo‘lmasligi kerak' })
  @MinLength(5, { message: 'Xabar kamida 5 ta belgidan iborat bo‘lishi kerak' })
  message: string;
}
