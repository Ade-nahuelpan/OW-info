import { Module } from '@nestjs/common';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';
import { HeroesRepository } from './heroes.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Heroes, heroesSchema } from './schemas/heroes.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Heroes.name, schema: heroesSchema }])],
  controllers: [HeroesController],
  providers: [HeroesService, HeroesRepository]
})
export class HeroesModule {}
