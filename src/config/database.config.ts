import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoosePlugin } from 'mongo-cursor-pagination';

export const datbaseConfig: MongooseModule = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    uri: configService.get<string>('MONGODB_URL'),
    connectionFactory: (connection) => {
      connection.plugin(mongoosePlugin);
      return connection;
    },
  }),
  inject: [ConfigService],
};
