import { Body, Controller, Delete, Get, InternalServerErrorException, NotFoundException, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { CreateHeroDTO, HeroesResponseDTO, UpdateHeroDTO, UpdateHeroParamDTO } from './dtos/heroes.dto';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';

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

  @Get(":id")
  async findById(@Param() getHeroParamDTO: UpdateHeroParamDTO): Promise<HeroesResponseDTO> {
    try{
      const heroes= await this.heroesService.findById(getHeroParamDTO.id)
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

  @Put(":id")
  async updateById(@Param() updateHeroParamDTO: UpdateHeroParamDTO, @Body() updateHeroDTO: UpdateHeroDTO): Promise<HeroesResponseDTO> {
    try{
      const heroes= await this.heroesService.updateById(updateHeroParamDTO.id, updateHeroDTO)
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
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads', 
      }),
    }),
  )
  async create(@UploadedFile() file: Express.Multer.File, @Body() createHeroDTO : CreateHeroDTO): Promise<HeroesResponseDTO>{
    return this.heroesService.create(createHeroDTO)
  }

  @Delete(":id")
  async deleteById(@Param() deleteHeroParamDTO: UpdateHeroParamDTO): Promise<HeroesResponseDTO> {
    try{
      const {id} = deleteHeroParamDTO
      const heroes= await this.heroesService.deleteById(id)
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
}