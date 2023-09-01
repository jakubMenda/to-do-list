import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    async signIn(username: string, password: string): Promise<{ access_token: string }> {
        const user = await this.usersService.findOneByUsername(username);

        if (!user) {
            throw new NotFoundException('User not found');
        }

        const doPasswordsMatch = await bcrypt.compare(password, user.password);

        if (!doPasswordsMatch) {
            throw new UnauthorizedException();
        }

        const { id, name } = user;

        const payload = { id, name };

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
