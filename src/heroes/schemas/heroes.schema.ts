import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type HeroesDocument = HydratedDocument<Heroes>;
@Schema()
export class Heroes {
  @Prop()
  name: string;

  @Prop()
  realName: string;

  @Prop()
  age: number;

  @Prop()
  nationality: string;

  @Prop()
  role: string;

  @Prop()
  image: string;

  @Prop()
  releaseDate: Date;
}

export const heroesSchema = SchemaFactory.createForClass(Heroes);