import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthenService } from './authen.service';

// import { CreateAuthenInput } from './dto/create-authen.input';

import { UserEntity } from 'src/entities/user.entity';
import { RegisterDto } from './dto/create-authen.input';
import { LoginDto } from './dto/login-authen.input';

@Resolver(() => UserEntity)
export class AuthenResolver {
  constructor(private readonly authenService: AuthenService) {}

  @Mutation(() => UserEntity)
  RegisterUser(@Args('register') createAuthenInput: RegisterDto) {
    // const {email , password , Age} = createAuthenInput
    return this.authenService.registerUser(createAuthenInput);
  }

  @Query(() => UserEntity, { name: 'authen' })
  findAll() {
    return this.authenService.findAll();
  }

  @Query(() => UserEntity, { name: 'authen' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.authenService.findOne(id);
  }

  @Mutation(() => UserEntity)
  loginUser(@Args('login')  loginInput:LoginDto) {
    
    return this.authenService.loginUser(loginInput)
  }

  @Mutation(() => UserEntity)
  removeAuthen(@Args('id', { type: () => Int }) id: number) {
    return this.authenService.remove(id);
  }
}
