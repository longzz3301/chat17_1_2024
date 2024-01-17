import { Field, ObjectType } from "@nestjs/graphql";
import { UserEntity } from "src/entities/user.entity";

@ObjectType()
export class RegisterResponse {
  @Field(() => UserEntity, { nullable: true })
  user?: UserEntity;
}
@ObjectType()
export class LoginResponse {
  @Field(() => UserEntity)
  user: UserEntity;
}