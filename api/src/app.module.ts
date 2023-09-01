import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { TasksModule } from './tasks/tasks.module';
import { EnvVariables, BusinessEnvironments } from './enums';
import { Task } from './tasks/task.entity';
import { User } from './users/users.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [ConfigService],

  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: configService.get(EnvVariables.DatabaseType),
        host: configService.get(EnvVariables.DatabaseHost),
        port: configService.get(EnvVariables.DatabasePort),
        username: configService.get(EnvVariables.DatabaseUser),
        password: configService.get(EnvVariables.DatabasePassword),
        database: configService.get(EnvVariables.DatabaseName),
        logging: false,
        entities: [Task, User],
        synchronize: configService.get(EnvVariables.BusinessEnv) === BusinessEnvironments.Local,
      }) as TypeOrmModuleOptions,
      inject: [ConfigService],
    }),

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

    TasksModule,

    UsersModule,

    AuthModule,
  ],

})

export class AppModule {}
