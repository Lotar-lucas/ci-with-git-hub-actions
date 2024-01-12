import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExemploCriadoCliService } from './exemplo_criado_cli.service';
import { CreateExemploCriadoCliDto } from './dto/create-exemplo_criado_cli.dto';
import { UpdateExemploCriadoCliDto } from './dto/update-exemplo_criado_cli.dto';

@Controller('exemplo-criado-cli')
export class ExemploCriadoCliController {
  constructor(private readonly exemploCriadoCliService: ExemploCriadoCliService) {}

  @Post()
  create(@Body() createExemploCriadoCliDto: CreateExemploCriadoCliDto) {
    return this.exemploCriadoCliService.create(createExemploCriadoCliDto);
  }

  @Get()
  findAll() {
    return this.exemploCriadoCliService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exemploCriadoCliService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExemploCriadoCliDto: UpdateExemploCriadoCliDto) {
    return this.exemploCriadoCliService.update(+id, updateExemploCriadoCliDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exemploCriadoCliService.remove(+id);
  }
}
