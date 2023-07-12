import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Data, DataSchema } from './data.schema';

@Module({
  //   imports: [MongooseModule.forRoot('mongodb://localhost:27017/noli'),
  //   MongooseModule.forFeature([
  //     { name: Data.name, schema: DataSchema }
  //   ])
  // ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
