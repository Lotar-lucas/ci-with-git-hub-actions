import {
  Controller,
  Get,
  Post,
  Res,
  Req,
  Header,
  Redirect,
  Param,
  Body,
  Put,
  Delete,
  ForbiddenException,
  UseFilters,
} from '@nestjs/common';
import { HttpCode } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/crate-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from '../http-exception.filter';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  // @UseFilters(HttpExceptionFilter())
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);

    // throw new ForbiddenException();
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get('healthCheck')
  healthCheck() {
    return 'API is running! OK!';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}

/*
Exemplos
  Redirecionamento -> @Redirect('https://nestjs.com', 301)

  Para especificar um cabeçalho de resposta personalizado -> @Header('Cache-Control', 'none')

  Para resposta injetando Express Response
    @Post()
    createExpress(@Res() response): void {
      response.status(204).send('This action adds a new cat');
    }

  Para pegar parametros de rota
    @Get(':id')
    findOne(@Param() params: any): string {
      console.log(params.id);
      return `This action returns a #${params.id} cat`;
    }

  Para acessar o body da requisição
    @Post()
    async create(@Body() crateCatDto: CreateCatDto) {
      return 'this action adds a new cat';
    }
*/
