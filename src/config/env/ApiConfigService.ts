import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  get port(): number {
    return this.configService.get<number>('PORT');
  }
  get nodeEnv(): string {
    return this.configService.get<string>('NODE_ENV');
  }
  get mongodbUrl(): string {
    return this.configService.get<string>('MONGODB_URL');
  }
}
