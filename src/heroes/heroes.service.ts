import { Injectable } from '@nestjs/common';
import { HeroesRepository } from './heroes.repository';
import { HeroesResponseDTO } from './dtos/heroes.dto';

@Injectable()
export class HeroesService {
    constructor(private heroesRepository: HeroesRepository) {}
    async findAll(): Promise<HeroesResponseDTO[]> {
        const heroes= await this.heroesRepository.findAll()
        const heroesResponse= heroes.map((hero)=>{
            const {_id: id, name, realName, age, nationality, role, image, releaseDate} = hero
                return {id: id.toHexString(), name, realName, age, nationality, role, image, releaseDate}
            })
        return heroesResponse;
      }
    async create(createHeroDTO): Promise<any>{
        try{ 
            const heroes= await this.heroesRepository.create(createHeroDTO)
            return heroes
        }catch(error){
            console.log('pipe the creator',error)
        }
    }
}
