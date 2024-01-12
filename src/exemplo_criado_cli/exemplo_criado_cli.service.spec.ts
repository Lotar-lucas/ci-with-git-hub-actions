import { Test, TestingModule } from '@nestjs/testing';
import { ExemploCriadoCliService } from './exemplo_criado_cli.service';

describe('ExemploCriadoCliService', () => {
  let service: ExemploCriadoCliService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExemploCriadoCliService],
    }).compile();

    service = module.get<ExemploCriadoCliService>(ExemploCriadoCliService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
