import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PrismaModule } from 'src/prisma/prisma.module'; // ✅ PrismaModule import qilindi
import { TelegramModule } from 'src/telegram/telegram.module'; // agar TelegramService ishlatilsa

@Module({
  imports: [PrismaModule, TelegramModule], // PrismaService va TelegramService shu orqali ishlatiladi
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
