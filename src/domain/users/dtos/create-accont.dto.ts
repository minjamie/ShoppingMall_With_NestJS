import { PickType } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { User } from '../entites/user.entity';

export class CreateAccountInput extends PickType(User, [
  'email',
  'password',
  'phoneNumber',
  'name',
]) {}

export class CreateAccountOutput extends CoreOutput {}
