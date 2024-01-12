import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { ExemploCriadoCliModule } from './exemplo_criado_cli/exemplo_criado_cli.module';

@Module({
  imports: [ExemploCriadoCliModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
