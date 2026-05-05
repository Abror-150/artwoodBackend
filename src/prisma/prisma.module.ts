import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // ixtiyoriy, butun loyihada avtomatik ishlatish uchun
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
