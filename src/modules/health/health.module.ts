// Packages
import { Module } from '@nestjs/common';

// Modules And Configs
import { HealthController } from './health.controller';
import { HealthService } from './health.service';

@Module({
  imports: [],
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}
