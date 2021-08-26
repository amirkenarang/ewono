// Packages
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

// Modules And Configs
import { HealthService } from './health.service';

// DTO
import { HealthDto } from './dto/health.dto';

@Controller('health')
export class HealthController {
  constructor(private healthService: HealthService) {}

  @ApiTags('Health')
  @Get()
  async check(): Promise<HealthDto> {
    const response = await this.healthService.healthCheck();
    return response;
  }
}
