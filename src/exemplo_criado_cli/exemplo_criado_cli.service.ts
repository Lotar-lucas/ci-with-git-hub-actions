import { Injectable } from '@nestjs/common';
import { CreateExemploCriadoCliDto } from './dto/create-exemplo_criado_cli.dto';
import { UpdateExemploCriadoCliDto } from './dto/update-exemplo_criado_cli.dto';

@Injectable()
export class ExemploCriadoCliService {
  create(createExemploCriadoCliDto: CreateExemploCriadoCliDto) {
    return 'This action adds a new exemploCriadoCli';
  }

  findAll() {
    return `This action returns all exemploCriadoCli`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exemploCriadoCli`;
  }

  update(id: number, updateExemploCriadoCliDto: UpdateExemploCriadoCliDto) {
    return `This action updates a #${id} exemploCriadoCli`;
  }

  remove(id: number) {
    return `This action removes a #${id} exemploCriadoCli`;
  }
}
