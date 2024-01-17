// redis.service.ts
import { Inject, Injectable } from '@nestjs/common';
// import { CACHE_MANAGER } from '@nestjs/common';
import { CacheModule , CACHE_MANAGER} from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisService {
  constructor(@Inject(CACHE_MANAGER) private readonly Cache: Cache) {}

  async saveToken(key: string, token: string): Promise<void> {
    await this.Cache.set(key, token);
    const tokenSave = this.Cache.set(key, token);
    console.log('tokenSave :' ,tokenSave )
  }

  async getToken(key: string): Promise<string | undefined> {
    return this.Cache.get(key);
  }

  async deleteToken(key: string): Promise<void> {
    await this.Cache.del(key);
  }
}
