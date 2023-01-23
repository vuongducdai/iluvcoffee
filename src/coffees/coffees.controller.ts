import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto.ts/create-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll(limit, offset);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateCoffeeDto) {
    this.coffeesService.create(body);
  }

  @Patch()
  update(@Param('id') id: string, @Body() body) {
    return this.coffeesService.update(id, body);
  }

  @Delete()
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
