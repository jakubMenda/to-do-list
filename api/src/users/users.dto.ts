import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmptyString } from '../utils/isNotEmptyString';

export class CreateUserDto {
    @ApiProperty({ type: String })
    @IsNotEmptyString()
    name: string;

    @ApiProperty({ type: String })
    @IsNotEmptyString()
    password: string;
  }