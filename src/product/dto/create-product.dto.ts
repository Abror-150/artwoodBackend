import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsUrl,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @ApiProperty({
    example: 'NameUZ',
    description: 'Mahsulot nomi (O‘zbek tilida)',
  })
  @IsString()
  @IsNotEmpty()
  name_uz: string;

  @ApiProperty({
    example: 'NameEN',
    description: 'Mahsulot nomi (Ingliz tilida)',
  })
  @IsString()
  @IsNotEmpty()
  name_en: string;

  @ApiProperty({
    example: 'NameRU',
    description: 'Mahsulot nomi (Rus tilida)',
  })
  @IsString()
  @IsNotEmpty()
  name_ru: string;

  @ApiProperty({
    example: 'descUZ.',
    description: 'Mahsulot tavsifi (O‘zbek tilida)',
  })
  @IsString()
  @IsNotEmpty()
  description_uz: string;

  @ApiProperty({
    example: 'descEN',
    description: 'Mahsulot tavsifi (Ingliz tilida)',
  })
  @IsString()
  @IsNotEmpty()
  description_en: string;

  @ApiProperty({
    example: 'descRU',
    description: 'Mahsulot tavsifi (Rus tilida)',
  })
  @IsString()
  @IsNotEmpty()
  description_ru: string;

  @ApiProperty({
    example: 12.5,
    description: 'Mahsulot narxi (so‘mda yoki valyutada)',
  })
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({
    example: 'https://example.com/images/apple.jpg',
    description: 'Mahsulot rasmi uchun URL',
  })
  @IsString()
  @IsNotEmpty()
  image: string;
}
