import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document ,now} from 'mongoose';

@Schema()
export class Data {
  @Prop()
  id: number;
  @Prop()
  name: string;

  @Prop()
  age: number;

 
}

export type DataDocument = Data & Document;
export const DataSchema = SchemaFactory.createForClass(Data);
