
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { AuthenModule } from './authen/authen.module';
import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
// import { CacheModule } from '@nestjs/cache-manager';
// import * as redisStore from 'cache-manager-redis-store';
// import { RedisClientOptions } from 'redis';
import { RedisModule } from './redis/redis.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '1',
      database: 'test1',
      entities: [UserEntity],
      synchronize: false,
    }),



    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),

    // UserModule,

    AuthenModule,

    UsersModule,
    RedisModule



    
  ],
 
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
