import {
  Controller,
  ForbiddenException,
  Get,
  NotFoundException,
  UseFilters,
} from '@nestjs/common';
import { ExceptionFiltersService } from './exception-filters.service';
import { HttpExceptionFilter } from './ExceptionFilters/HttpExceptionFilter .filter';


// @UseFilters(new HttpExceptionFilter()) // contoller scoped exception
@Controller('exception-filters')
export class ExceptionFiltersController {
  constructor(
    private readonly exceptionFiltersService: ExceptionFiltersService,
  ) {}

  @Get('exception')
  // @UseFilters(new HttpExceptionFilter())
  handleException() {
    throw new ForbiddenException();
  }
}
