import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './entities/job.entity';

@Injectable()
export class JobsService {
  constructor(@InjectRepository(Job) private jobsRepo: Repository<Job>) {}

  async create(jobData: Partial<Job>) {
    return this.jobsRepo.save(jobData);
  }

  async update(id: number, jobData: Partial<Job>) {
    await this.jobsRepo.update(id, jobData);
    return this.jobsRepo.findOne({ where: { id } });
  }
  
  async findAll() {
    return this.jobsRepo.find();
  }

  async remove(id: number) {
    return this.jobsRepo.delete(id);
  }
}

