import { BadRequestException, Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateTaskDto, UpdateTaskDto } from './tasks.dto';
import { Task } from './task.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { RequestWithUser } from 'src/auth/types';

@UseGuards(AuthGuard)
@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
    constructor(
        @InjectRepository(Task)
        private readonly tasksRepository: Repository<Task>,
      ) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, description: 'tasks retrieved' })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'unauthorized' })
    findAll(@Req() request: RequestWithUser): Promise<Task[]> {
        return this.tasksRepository.findBy({ user_id: request.user.id });
    }

    @Get('finished')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, description: 'tasks retrieved' })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'unauthorized' })
    async findFinished(@Req() request: RequestWithUser): Promise<Task[]> {
        return this.tasksRepository
            .createQueryBuilder('task')
            .andWhere('task.deleted_at IS NOT NULL')
            .andWhere('task.user_id = :user_id', { user_id: request.user.id })
            .withDeleted() 
            .getMany()
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, description: 'task retrieved' })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'unauthorized' })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'unauthorized' })
    async findOne(@Param('id') id: string, @Req() request: RequestWithUser): Promise<Task> {
    const parsedId = parseInt(id);

    if (Number.isNaN(parsedId)) {
        throw new BadRequestException('id must be a number');
    }

    const task = await this.tasksRepository.findOneBy({ id: parsedId, user_id: request.user.id });

    if (!task) {
        throw new NotFoundException('Task not found');
    }

        return task;
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: HttpStatus.CREATED, description: 'task created' })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'bad request' })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'unauthorized' })
    async create(@Body() createTaskDto: CreateTaskDto, @Req() request: RequestWithUser): Promise<null> {
        await this.tasksRepository.insert({ ...createTaskDto, user_id: request.user.id });

        return null;
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, description: 'task updated' })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'bad request' })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'unauthorized' })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'not found' })
    async update(
        @Param('id') id: string,
        @Body() updateTaskDto: UpdateTaskDto,
        @Req() request: RequestWithUser,
        ): Promise<null> {
        const parsedId = parseInt(id);

        if (Number.isNaN(parsedId)) {
            throw new BadRequestException('id must be a number');
        }

        const task = await this.tasksRepository.findOneBy({ id: parsedId, user_id: request.user.id });

        if (!task) {
            throw new NotFoundException('Task not found');
        }

        await this.tasksRepository.update({ id: parsedId }, updateTaskDto)

        return null
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: HttpStatus.OK, description: 'task updated' })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'bad request' })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'unauthorized' })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'not found' })
    async remove(@Param('id') id: string, @Req() request: RequestWithUser): Promise<null> {
        const parsedId = parseInt(id);

        if (Number.isNaN(parsedId)) {
            throw new BadRequestException('id must be a number');
        }

        const task = await this.tasksRepository.findOneBy({ id: parsedId, user_id: request.user.id });

        if (!task) {
            throw new NotFoundException('Task not found');
        }

        await this.tasksRepository.softDelete({ id: parsedId })

        return null
    }
}
