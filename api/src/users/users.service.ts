import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
      ) {}

      async findOneByUsername(username: string): Promise<User | undefined> {
        return this.usersRepository.findOne({ where: { name: username } });
      }
}
