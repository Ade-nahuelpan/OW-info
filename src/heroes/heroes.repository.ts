import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Heroes, HeroesDocument } from './schemas/heroes.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class HeroesRepository {
  constructor(@InjectModel(Heroes.name) private heroesModel: Model<Heroes>) {}
  async findAll(): Promise<HeroesDocument[]> {
    return this.heroesModel.find().exec();
  }
  async create(createHeroDTO: any): Promise<Heroes> {
    const createdHeroe = new this.heroesModel(createHeroDTO);
    return createdHeroe.save();
  };

 
}
