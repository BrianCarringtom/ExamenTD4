import { Test, TestingModule } from '@nestjs/testing';
import { CarringtonController } from './carrington.controller';

describe('CarringtonController', () => {
  let controller: CarringtonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarringtonController],
    }).compile();

    controller = module.get<CarringtonController>(CarringtonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
