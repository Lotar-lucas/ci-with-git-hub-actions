import { Test, TestingModule } from '@nestjs/testing';
import { ExemploCriadoCliController } from './exemplo_criado_cli.controller';
import { ExemploCriadoCliService } from './exemplo_criado_cli.service';

describe('ExemploCriadoCliController', () => {
  let controller: ExemploCriadoCliController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExemploCriadoCliController],
      providers: [ExemploCriadoCliService],
    }).compile();

    controller = module.get<ExemploCriadoCliController>(ExemploCriadoCliController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
