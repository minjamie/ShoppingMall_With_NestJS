import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dtos/create-accont.dto';
import { UserRepository } from './repositories/user.respository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  signUp(createAccountInput: CreateAccountInput): Promise<CreateAccountOutput> {
    return this.userRepository.createUser(createAccountInput);
  }
}
