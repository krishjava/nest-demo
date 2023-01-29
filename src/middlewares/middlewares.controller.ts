import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  NotFoundException,
} from '@nestjs/common';
import { MiddlewaresService } from './middlewares.service';
import { CreateMiddlewareDto } from './dto/create-middleware.dto';
import { UpdateMiddlewareDto } from './dto/update-middleware.dto';

@Controller('middlewares')
export class MiddlewaresController {
  constructor(private readonly middlewaresService: MiddlewaresService) {}

  @Post()
  create(@Body() createMiddlewareDto: CreateMiddlewareDto) {
    return this.middlewaresService.create(createMiddlewareDto);
  }

  @Get()
  findAll() {
    return this.middlewaresService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   console.log('id routes');
  //   return this.middlewaresService.findOne(+id);
  // }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMiddlewareDto: UpdateMiddlewareDto,
  ) {
    return this.middlewaresService.update(+id, updateMiddlewareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.middlewaresService.remove(+id);
  }

  @Get('test-middleware')
  checkMiddleware(@Req() req) {
    throw new NotFoundException();
    console.log('middlewares route ' + req.body?.id);
    return { id: 120 };
  }
}
