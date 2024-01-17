import { Test, TestingModule } from '@nestjs/testing';
import { AuthenResolver } from './authen.resolver';
import { AuthenService } from './authen.service';

describe('AuthenResolver', () => {
  let resolver: AuthenResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthenResolver, AuthenService],
    }).compile();

    resolver = module.get<AuthenResolver>(AuthenResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
