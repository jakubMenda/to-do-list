import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { SignInDto } from './signIn.dto';
import { AccessTokenResponse } from './types';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    @ApiResponse({ status: HttpStatus.OK, description: 'logged in' })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'unauthorized' })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'not found' })
    signIn(@Body() signInDto: SignInDto): Promise<AccessTokenResponse> {
        return this.authService.signIn(signInDto.name, signInDto.password);
    }
}
