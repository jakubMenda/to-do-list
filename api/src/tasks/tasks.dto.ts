import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

import { IsNotEmptyString } from '../utils/isNotEmptyString';

export class CreateTaskDto {
    @ApiProperty({ type: String })
    @IsNotEmptyString()
    name: string;

    @ApiProperty({ type: String })
    @IsNotEmptyString()
    description: string;

    @ApiProperty({ type: String })
    @IsNotEmptyString()
    @IsOptional()
    note: string;
  }


export class UpdateTaskDto extends PartialType(CreateTaskDto) {}