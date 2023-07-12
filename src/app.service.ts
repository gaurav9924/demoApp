import { Injectable } from '@nestjs/common';
import { Data } from './data.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Data.name)
    private dataModel: Model<Data>,
  ) {}
  async getHello() {
    return await this.dataModel.find();
  }
}
