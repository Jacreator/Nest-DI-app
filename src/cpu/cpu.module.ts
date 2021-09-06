import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { CpuController } from './cpu.controller';
import { PowerModule } from '../power/power.module';

@Module({
  providers: [CpuService],
  controllers: [CpuController],
  imports: [PowerModule],
  exports: [CpuService],
})
export class CpuModule {

}
