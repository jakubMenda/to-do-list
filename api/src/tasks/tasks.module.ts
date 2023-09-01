import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { TasksController } from './tasks.controller';
import { Task } from './task.entity';
import { EnvVariables } from 'src/enums';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task]),
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        global: true,
        secret: configService.get(EnvVariables.JWTSecret),
        signOptions: {
          expiresIn: configService.get(EnvVariables.JWTExpiration),
        }
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [TasksController]
})

export class TasksModule {}
