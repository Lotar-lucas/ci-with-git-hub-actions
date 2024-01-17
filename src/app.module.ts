import {
  Module,
  NestModule,
  RequestMethod,
  MiddlewareConsumer,
} from '@nestjs/common';
import { LoggerMiddleware } from './cats/common/middleware/logger.middleware';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';

import { ExemploCriadoCliModule } from './exemplo_criado_cli/exemplo_criado_cli.module';

@Module({
  imports: [ExemploCriadoCliModule, CatsModule],
})

// implementando o  middleware LoggerMiddleware
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'cats', method: RequestMethod.GET });
    // Normalmente se passa apenas uma lista para o forRoutes,
    // Ex: .forRoutes(CatsController)

    // Exemplos de vários middlewares executados sequencialmente
    // consumer.apply(cors(), helmet(), logger).forRoutes(CatsController);
  }
}

// para restringir não só para route cats, mas tambem para um metodo especifico, usa-se o RequestMethod
// indicando o caminho e qual o método http
