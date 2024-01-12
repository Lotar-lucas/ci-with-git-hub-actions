import { PartialType } from '@nestjs/mapped-types';
import { CreateExemploCriadoCliDto } from './create-exemplo_criado_cli.dto';

export class UpdateExemploCriadoCliDto extends PartialType(CreateExemploCriadoCliDto) {}
