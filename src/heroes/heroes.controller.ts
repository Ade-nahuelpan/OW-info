import { Body, Controller, Get, InternalServerErrorException, NotFoundException, Param, Post } from '@nestjs/common';
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
    }catch(error){
      throw new InternalServerErrorException({
        message:"there was an error"
      })
    }
    
  }
  @Get(':id')
  async findById(@Param("id") id: string): Promise<HeroesResponseDTO> {
    try{
      const heroes= await this.heroesService.findById(id)
      return heroes;
    }catch(error){
      if (error.message === "hero not found") throw new NotFoundException({
        message: error.message
      })
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
