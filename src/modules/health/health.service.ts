// Packaes
import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

// Config
import * as pjson from '../../../package.json';

// DTO And Types
import { HealthDto } from './dto/health.dto';
import { StatusType } from './statusType';

/**
 * @description Helath Check Service -
 * This Service developed to check health service.
 * In this Version "MongoDb Connection" status checked.
 * @author Amir Kenarang <amir.kenarang@gmail.com>
 * @version 1.0.0
 * @returns {Object} - Health status object
 */
@Injectable()
export class HealthService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async healthCheck(): Promise<HealthDto> {
    // Check Dante mongo connecton
    const mongoDb = {
      name: this.connection.name,
      status:
        this.connection.readyState === 1 ? StatusType.UP : StatusType.DOWN,
    };
    const mongoStatis = mongoDb.status === StatusType.UP;
    const status = mongoStatis === true ? StatusType.UP : StatusType.DOWN;
    const version = pjson.version;
    const name = pjson.name;

    const response = {
      status,
      version,
      name,
      services: [mongoDb],
    };
    return response;
  }
}
