import { Body, Controller, Get, InternalServerErrorException, Post } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { HeroesResponseDTO } from './dtos/heroes.dto';

@Controller('heroes')

export class HeroesController {

    constructor(private heroesService: HeroesService) {}
  @Get()
  async findAll(): Promise<HeroesResponseDTO[]> {
    try{
      const heroes= await this.heroesService.findAll()
      return heroes;
    }catch{
      throw new InternalServerErrorException({
        message:"there was an error"
      })
    }
    
  }
  @Post()
  async create(@Body() createHeroDTO): Promise<any>{
    return this.heroesService.create(createHeroDTO)
  }
}
