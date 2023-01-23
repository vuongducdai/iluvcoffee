import { Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto.ts/create-coffee.dto';

@Injectable()
export class CoffeesService {
  findAll(limit: string, offset: string) {
    return `This returns all coffees ${limit}, ${offset}`;
  }

  findOne(id: string) {
    return `This return coffees id ${id}`;
  }

  create(body: CreateCoffeeDto) {
    return body;
  }

  update(id: string, body: CreateCoffeeDto) {
    return `This return coffees id ${id}`;
  }

  remove(id: string) {
    return 'this delete';
  }
}
