import { Test, TestingModule } from '@nestjs/testing';

import { EpisodesController } from './episodes.controller';
import { ConfigModule } from '../config/config.module';
import { EpisodesService } from './episodes.service';

describe('EpisodesController', () => {
  let controller: EpisodesController;

  const mockEpisodesService = {
    findAll: () => [{ id: 'id' }],
    findFeaturedEpisodes: () => [{ id: 'id' }],
    findOne: (id: string) => ({ id }),
    create: () => ({ id: 'id' }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      controllers: [EpisodesController],
      providers: [{ provide: EpisodesService, useValue: mockEpisodesService }],
    }).compile();

    controller = module.get<EpisodesController>(EpisodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findOne', () => {
    it('should return correct response', async () => {
      const episodeId = 'id';
      const result = await controller.findOne(episodeId);
      expect(result).toEqual({ id: 'id' });
    });
  });
});
