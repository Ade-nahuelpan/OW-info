import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { HeroesModule } from './heroes/heroes.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [HeroesModule, MongooseModule.forRoot('mongodb+srv://adesp:Tutito123@ow-cluster.0uylg.mongodb.net/Hero-info')],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
