import { Module } from '@nestjs/common';
import { AuthenService } from './authen.service';
import { AuthenResolver } from './authen.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { RedisModule } from 'src/redis/redis.module';
// import { JwtAuthService } from './jwt.service';

@Module({
  imports : [TypeOrmModule.forFeature([UserEntity]) ,RedisModule  ] ,
  providers: [AuthenResolver, AuthenService ,JwtService   ],
})
export class AuthenModule {}
