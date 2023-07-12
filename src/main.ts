import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT||3000 ; 
  console.log(PORT);
  
  await app.listen(PORT, function () {
    console.log(`Listening port: ${PORT}`)});
}
bootstrap();
