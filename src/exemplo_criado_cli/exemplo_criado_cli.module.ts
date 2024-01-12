import { Module } from '@nestjs/common';
import { ExemploCriadoCliService } from './exemplo_criado_cli.service';
import { ExemploCriadoCliController } from './exemplo_criado_cli.controller';

@Module({
  controllers: [ExemploCriadoCliController],
  providers: [ExemploCriadoCliService],
})
export class ExemploCriadoCliModule {}
