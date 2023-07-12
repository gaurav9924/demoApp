import { Injectable } from '@nestjs/common';
import { Data } from './data.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Noli App';
  }
}
