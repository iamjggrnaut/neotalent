import { Summary } from 'src/summaries/entities/summary.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
} from 'typeorm';

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Summary, (summary) => summary.user)
  summaries: Summary[];
}
