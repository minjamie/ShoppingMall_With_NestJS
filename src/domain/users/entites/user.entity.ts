import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { PASSWORD_LEN, PHONE_NUM_LEN } from 'src/constant/default-value.const';
import { BeforeInsert, BeforeUpdate, Column, Entity, Unique } from 'typeorm';
import {
  FIELD_REQUIRE,
  PASSWORD_VALIDATION,
  PHONE_NO_VALIDATION,
} from '../../../constant/message.const';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';

const passwordRegex = /^(?=.*\d)(?=.*[A-Za-z])(?=.*[@#$%^&+=]).{8,}$/;
const phoneNumberRegex = /^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/;

@Entity()
export class User extends CoreEntity {
  @IsEmail()
  @IsNotEmpty({ message: FIELD_REQUIRE })
  @Column()
  email!: string;

  @IsString()
  @Matches(passwordRegex, {
    message: PASSWORD_VALIDATION,
  })
  @MinLength(PASSWORD_LEN)
  @IsNotEmpty({ message: FIELD_REQUIRE })
  @Column()
  password!: string;

  @IsString()
  @IsNotEmpty({ message: FIELD_REQUIRE })
  @Column()
  name!: string;

  @IsString()
  @MinLength(PHONE_NUM_LEN)
  @Matches(phoneNumberRegex, {
    message: PHONE_NO_VALIDATION,
  })
  @IsNotEmpty({ message: FIELD_REQUIRE })
  @Column()
  phoneNumber!: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    try {
      const salt = await bcrypt.genSalt(+process.env.SALT_ROUND);
      if (this.password) {
        this.password = await bcrypt.hash(this.password, salt);
      }
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException();
    }
  }
}
