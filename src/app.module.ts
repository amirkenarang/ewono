import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { datbaseConfig } from './config/database.config';
import { envConfig } from './config/env/env.config';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { WordsModule } from './modules/words/words.module';

@Module({
  imports: [
    ConfigModule.forRoot(envConfig),
    MongooseModule.forRootAsync(datbaseConfig),
    AuthModule,
    UsersModule,
    WordsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
