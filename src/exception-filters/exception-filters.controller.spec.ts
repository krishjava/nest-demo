import { Test, TestingModule } from '@nestjs/testing';
import { ExceptionFiltersController } from './exception-filters.controller';
import { ExceptionFiltersService } from './exception-filters.service';

describe('ExceptionFiltersController', () => {
  let controller: ExceptionFiltersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExceptionFiltersController],
      providers: [ExceptionFiltersService],
    }).compile();

    controller = module.get<ExceptionFiltersController>(ExceptionFiltersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
