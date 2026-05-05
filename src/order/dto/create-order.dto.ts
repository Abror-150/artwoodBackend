import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsBoolean,
  IsOptional,
  IsInt,
  Min,
  ValidateNested,
  ArrayMinSize,
} from 'class-validator';
import { Type } from 'class-transformer';

class OrderItemDto {
  @ApiProperty({
    example: 'a7c9b4f5-1c34-4e5b-b8a8-f2efc2461a23',
    description: 'Mahsulotning ID si (Product jadvalidan)',
  })
  @IsString()
  @IsNotEmpty()
  productId: string;

  @ApiProperty({
    example: 2,
    description: 'Buyurtmadagi mahsulot soni',
  })
  @IsInt()
  @Min(1)
  quantity: number;
}

export class CreateOrderDto {
  @ApiProperty({
    example: 'Abdulla Karimov',
    description: 'Buyurtma qilayotgan shaxsning to‘liq ismi',
  })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({
    example: '+998901234567',
    description: 'Telefon raqami',
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    example: 'Toshkent sh., Chilonzor tumani, 7-daha',
    description: 'Manzil',
  })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    example: 'abdulla@gmail.com',
    description: 'Elektron pochta (ixtiyoriy)',
    required: false,
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({
    example: true,
    description: 'Oferta shartlariga rozilik',
  })
  @IsBoolean()
  oferta: boolean;

  @ApiProperty({
    example: 250000,
    description: 'Buyurtma umumiy narxi (so‘mda)',
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  totalPrice?: number;

  @ApiProperty({
    type: [OrderItemDto],
    description: 'Buyurtma ichidagi mahsulotlar ro‘yxati',
    example: [
      { productId: 'a7c9b4f5-1c34-4e5b-b8a8-f2efc2461a23', quantity: 2 },
    ],
  })
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  @ArrayMinSize(1)
  items: OrderItemDto[];
}
