import { Test, TestingModule } from '@nestjs/testing';
import { CarringtonService } from './carrington.service';

describe('CarringtonService', () => {
  let service: CarringtonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarringtonService],
    }).compile();

    service = module.get<CarringtonService>(CarringtonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
