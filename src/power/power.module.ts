import { Global, Module } from '@nestjs/common';
import { PowerService } from './power.service';
import { PowerController } from './power.controller';

@Global()
@Module({
  providers: [PowerService],
  controllers: [PowerController],
  exports: [PowerService]
})
export class PowerModule {}
