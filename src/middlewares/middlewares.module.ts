import { Module } from '@nestjs/common';
import { MiddlewaresService } from './middlewares.service';
import { MiddlewaresController } from './middlewares.controller';

@Module({
  controllers: [MiddlewaresController],
  providers: [MiddlewaresService]
})
export class MiddlewaresModule {}
