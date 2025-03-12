import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  company: string;

  @Column()
  location: string;

  @Column()
  type: string;

  @Column()
  salary: number;

  @Column({ type: 'date' })
  deadline: string;

  @Column()
  description: string;
}

