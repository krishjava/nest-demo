import { Test, TestingModule } from '@nestjs/testing';
import { ExceptionFiltersService } from './exception-filters.service';

describe('ExceptionFiltersService', () => {
  let service: ExceptionFiltersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExceptionFiltersService],
    }).compile();

    service = module.get<ExceptionFiltersService>(ExceptionFiltersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
