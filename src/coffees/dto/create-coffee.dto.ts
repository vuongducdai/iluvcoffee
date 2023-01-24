import { IsArray, IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  brand: string;

  @IsString()
  name: string;

  @IsArray()
  @IsString({ each: true })
  flavors: string[];
}
