import { EntityRepository, Repository } from 'typeorm';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from '../dtos/create-accont.dto';
import { User } from '../entites/user.entity';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { ER_DUPLICATED } from 'src/constant/message.const';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(
    createAccountInput: CreateAccountInput,
  ): Promise<CreateAccountOutput> {
    try {
      const { email, password, name, phoneNumber } = createAccountInput;
      const existedUser = await this.findOne({ email });
      if (existedUser) {
        // 에러 생성
        return { ok: false, error: ER_DUPLICATED };
      }

      const user = this.create({
        email,
        password,
        name,
        phoneNumber,
      });
      await this.save(user);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException(ER_DUPLICATED);
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
