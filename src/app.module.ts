import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Data, DataSchema } from './data.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://data-noli-user_3000:6_VZ3qkfFe%25S%25,4@noli.tnyrzv9.mongodb.net/NoliDemo',
    ),
    MongooseModule.forFeature([{ name: Data.name, schema: DataSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
