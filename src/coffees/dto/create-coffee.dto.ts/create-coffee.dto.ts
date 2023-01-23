import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  brand: string;

  @IsString()
  name: string;

  @IsString({ each: true })
  flavors: string[];
}
