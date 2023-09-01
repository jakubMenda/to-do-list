import { BadRequestException, Body, ConflictException, Controller, Get, HttpCode, HttpStatus, Param, Post, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import { CreateUserDto } from './users.dto';
import { User } from './users.entity';
import { EnvVariables } from 'src/enums';
import { AuthGuard } from 'src/auth/auth.guard';
import { AccessTokenResponse } from 'src/auth/types';

@Controller('users')
@ApiTags('Users')
export class UsersController {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService,
      ) {}


    @Get()
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, description: 'user data retrieved' })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'unauthorized' })
    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, description: 'user data retrieved' })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'unauthorized' })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'user not found' })
    async findOne(@Param('id') id: string): Promise<Partial<User>> {
        const parsedId = parseInt(id);

        if (Number.isNaN(parsedId)) {
            throw new BadRequestException('id must be a number');
        }

        const { password, ...result } = await this.usersRepository.findOne({ where: { id: parsedId } });

        return result;
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: HttpStatus.CREATED, description: 'user created' })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'invalid body params' })
    @ApiResponse({ status: HttpStatus.CONFLICT, description: 'user exists' })
    async create(@Body() createUserDto: CreateUserDto): Promise<AccessTokenResponse> {
        const existingUser = await this.usersRepository.findOneBy({ name: createUserDto.name });

        if (existingUser) {
            throw new ConflictException('User with given name already exists');
        }

        const saltRounds = parseInt(this.configService.get(EnvVariables.BCryptSaltRounds))
        const { password: plainTextPassword, ...rest } = createUserDto;

        const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);

        await this.usersRepository.insert({ ...rest, password: hashedPassword });

        const { id, name } = await this.usersRepository.findOneBy({ name: createUserDto.name });

        const payload = { id, name };

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
