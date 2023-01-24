import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  // @Type(()=> Number) or
  // Global config in ValidationPipe
  // transformOptions: {
  //   enableImplicitConversion: true,
  // },
  limit: number;

  @IsOptional()
  @IsPositive()
  // @Type(()=> Number) or
  // Global config in ValidationPipe
  // transformOptions: {
  //   enableImplicitConversion: true,
  // },
  offset: number;
}
