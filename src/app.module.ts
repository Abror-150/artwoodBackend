import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PrismaService } from './prisma/prisma.service';
import { OrderModule } from './order/order.module';
import { TelegramModule } from './telegram/telegram.module';
import { UploadModule } from './upload/upload.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [ProductModule, OrderModule, TelegramModule, UploadModule, ContactModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
