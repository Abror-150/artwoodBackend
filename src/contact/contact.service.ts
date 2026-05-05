import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createContactDto: CreateContactDto) {
    return await this.prisma.contact.create({ data: createContactDto });
  }

  async findAll() {
    return await this.prisma.contact.findMany();
  }

  findOne(id: string) {
    return `This action returns a #${id} contact`;
  }

  update(id: string, updateContactDto: UpdateContactDto) {
    return `This action updates a #${id} contact`;
  }

  async remove(id: string) {
    return await this.prisma.contact.delete({ where: { id } });
  }
}
