import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@ObjectType()
@Entity("user")
@Unique(["email" , "id"])
export class UserEntity {
  @Field(() => String, { nullable: true })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  email: string ;

  @Field()
  @Column()
  username: string ;

  @Field()
  @Column()
  password : string 

  
  @Field()
  @Column()
  Age: number
}


