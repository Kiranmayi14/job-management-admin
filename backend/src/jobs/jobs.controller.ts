import { Controller, Get, Post, Body } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './entities/job.entity';
import { Param, Patch, Delete } from '@nestjs/common';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  async create(@Body() jobData: Partial<Job>) {
    return this.jobsService.create(jobData);
  }

  @Get()
  async findAll() {
    return this.jobsService.findAll();
  }

  @Patch(':id')
async update(@Param('id') id: number, @Body() jobData: Partial<Job>) {
  return this.jobsService.update(id, jobData);
}

@Delete(':id')
async remove(@Param('id') id: number) {
  return this.jobsService.remove(id);
}

}

