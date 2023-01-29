import { Module } from '@nestjs/common';
import { ExceptionFiltersService } from './exception-filters.service';
import { ExceptionFiltersController } from './exception-filters.controller';

@Module({
  controllers: [ExceptionFiltersController],
  providers: [ExceptionFiltersService]
})
export class ExceptionFiltersModule {}
