import { Injectable } from '@nestjs/common';
import { HeroesRepository } from './heroes.repository';
import { HeroesResponseDTO, UpdateHeroDTO } from './dtos/heroes.dto';


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
    async findById(heroId: string): Promise<HeroesResponseDTO> {
        const hero= await this.heroesRepository.findById(heroId)
        if (!hero) throw new Error("hero not found")
        const {_id: id, name, realName, age, nationality, role, image, releaseDate} = hero
        return {id: id.toHexString(), name, realName, age, nationality, role, image, releaseDate}
    }
    async updateById(heroId: string, updateHeroDTO: UpdateHeroDTO): Promise<HeroesResponseDTO> {
        const hero= await this.heroesRepository.findById(heroId)
        if (!hero) throw new Error("hero not found")
        await this.heroesRepository.updateById(heroId, updateHeroDTO)
        const updatedHero= await this.heroesRepository.findById(heroId)
        const {_id: id, name, realName, age, nationality, role, image, releaseDate} = updatedHero
        return {id: id.toHexString(), name, realName, age, nationality, role, image, releaseDate}

      }
    async create(createHeroDTO): Promise<any>{
        try{ 
            const heroes= await this.heroesRepository.create(createHeroDTO)
            return heroes
        }catch(error){
            console.log(error)
        }
    }
    async deleteById(heroId: string): Promise<HeroesResponseDTO> {
        const hero= await this.heroesRepository.findById(heroId)
        if (!hero) throw new Error("hero not found")
        const {_id: id, name, realName, age, nationality, role, image, releaseDate} = hero
        await this.heroesRepository.deleteById(heroId)
        return {id: id.toHexString(), name, realName, age, nationality, role, image, releaseDate}
      }
}
