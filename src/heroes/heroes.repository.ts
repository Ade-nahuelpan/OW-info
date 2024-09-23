import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Heroes, HeroesDocument } from './schemas/heroes.schema';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateHeroDTO } from './dtos/heroes.dto';

@Injectable()
export class HeroesRepository {
  constructor(@InjectModel(Heroes.name) private heroesModel: Model<Heroes>) {}
  async findAll(): Promise<HeroesDocument[]> {
    return this.heroesModel.find().exec();
  }
  async findById(id: string): Promise<HeroesDocument> {
    return this.heroesModel.findById(id);
  }
  async create(createHeroDTO: any): Promise<Heroes> {
    const createdHeroe = new this.heroesModel(createHeroDTO);
    return createdHeroe.save();
  }
  async updateById(id: string, updateHeroDTO: UpdateHeroDTO): Promise<void> {
    await this.heroesModel.updateOne({_id:id},updateHeroDTO);
  }
  async deleteById(id: string): Promise<void> {
    await this.heroesModel.deleteOne({_id:id});
  };
}
