import { Module } from '@nestjs/common';
import { CarringtonController } from './carrington.controller';
import { CarringtonService } from './carrington.service';

@Module({
    controllers: [CarringtonController],
    providers: [CarringtonService],
  })

export class CarringtonModule {}
