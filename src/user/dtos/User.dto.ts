import { IsNotEmpty, IsString } from 'class-validator';
import { isString } from 'util';
import { isStringObject } from 'util/types';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
