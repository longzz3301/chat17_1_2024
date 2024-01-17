// redis.module.ts
import { Module } from '@nestjs/common';

import * as redisStore from 'cache-manager-redis-store';
import { RedisClientOptions } from 'redis';
import { RedisService } from './redis.service';
import { CacheModule } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
@Module({
  imports: [
    CacheModule.register<RedisClientOptions>({
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
    
  ],
  providers: [ RedisService] ,
  
  exports: [RedisService , CacheModule ], 
})
export class RedisModule {}


