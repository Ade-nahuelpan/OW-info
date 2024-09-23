import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { HeroesModule } from './heroes/heroes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [HeroesModule, MongooseModule.forRoot('mongodb+srv://adesp:Tutito123@ow-cluster.0uylg.mongodb.net/Hero-info'), ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'uploads'), 
    serveRoot: '/uploads', 
  })],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
