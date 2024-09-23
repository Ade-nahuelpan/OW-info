import { IsDateString, IsInt, IsMongoId, IsString, Max, MaxLength, Min, min, MinLength } from "class-validator";
export class HeroesResponseDTO {
    id: string;
    name: string;
    realName: string;
    age: number;
    nationality: string;
    role: string;
    releaseDate: Date;
    image: string
  }
export class UpdateHeroDTO{
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  realName: string;

  @IsInt()
  @Min(0)
  @Max(99999)
  age: number;

  @IsString()
  @MinLength(0)
  @MaxLength(100)
  nationality: string;

  @IsString()
  @MinLength(3)
  @MaxLength(10)
  role: string;

  @IsDateString()
  releaseDate: string;
}
export class UpdateHeroParamDTO{
  @IsMongoId()
  id: string;
}
export class CreateHeroDTO{
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  realName: string;

  @IsInt()
  @Min(0)
  @Max(99999)
  age: number;

  @IsString()
  @MinLength(0)
  @MaxLength(100)
  nationality: string;

  @IsString()
  @MinLength(3)
  @MaxLength(10)
  role: string;

  @IsDateString()
  releaseDate: string;
}
