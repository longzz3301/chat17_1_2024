import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/create-authen.input';
import { LoginDto } from './dto/login-authen.input';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
// import { JwtAuthService } from "./jwt.service"
import { RedisService } from 'src/redis/redis.service';
import {
  JwtPayload,
  sign as jwtSign,
  verify as jwtVerify,
  decode as jwtDecode
} from 'jsonwebtoken'


@Injectable()
export class AuthenService {
  constructor( @InjectRepository(UserEntity) private readonly userRepository : Repository<UserEntity> ,
  private readonly jwtAuthService: JwtService,
  private readonly RedisService : RedisService
 ) {}
  async registerUser(RegisterDto: RegisterDto) {
    const check_UserExist = await this.userRepository.findOne({
      where: { email: RegisterDto.email },
    });
    const {password , confirmPassword} = RegisterDto

    if (password !== confirmPassword) {
      throw new Error("wrong password ");
    }

    if(check_UserExist) {
      throw new Error("User already exists");
    }

    const hassPassword = await bcrypt.hash(RegisterDto.password , 10)
    const data = {
      email: RegisterDto.email,
      username : RegisterDto.username ,
      Age: RegisterDto.Age,
      password: hassPassword, 
      confirmPassword: RegisterDto.confirmPassword,

    }


    // const createNewUser = await this.userRepository.create(RegisterDto)

    const saveUser = await this.userRepository.save(data)
    console.log(saveUser)
    return saveUser


  }

  async loginUser(loginInput : LoginDto ) {
    const loginUser = {
      email : loginInput.email,
      password: loginInput.password
    }
    const authen_User = await this.userRepository.findOne({
      where: { email: loginUser.email },
    })
    if (!authen_User) {
      throw new Error("User not exits ");
    }

    const userInfo = {
      id : authen_User.id ,
      username: authen_User.username
    }

    if (loginUser.password === authen_User.password) {
      const generateAccessToken = jwtSign({userInfo :userInfo } , ' longzz' , {expiresIn:'3000s'} )
      const refreshToken = jwtSign({ userInfo: userInfo }, 'refresh-secret', { expiresIn: '7d' });
      const saveToken = this.RedisService.saveToken(userInfo.id , refreshToken) 
      console.log(generateAccessToken)
      console.log(refreshToken)
      return {generateAccessToken , refreshToken}
    }
    throw new Error("wrong password or wrong user");


  }
  findAll() {
    return `This action returns all authen`;
  }

  findOne(id: number) {
    return `This action returns a #${id} authen`;
  }

  update(id: number, LoginDto: LoginDto) {
    return `This action updates a #${id} authen`;
  }

  remove(id: number) {
    return `This action removes a #${id} authen`;
  }
}
