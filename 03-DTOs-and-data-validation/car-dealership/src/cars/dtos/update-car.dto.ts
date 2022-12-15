import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto {

  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsOptional()
  @IsString()
  readonly brand?: string;

  @IsOptional()
  @IsString()
  readonly model?: string;
}
