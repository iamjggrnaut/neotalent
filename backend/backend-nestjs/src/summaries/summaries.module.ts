import { Module } from '@nestjs/common';
import { SummariesService } from './summaries.service';
import { SummariesController } from './summaries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Summary } from './entities/summary.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Summary])],
  controllers: [SummariesController],
  providers: [SummariesService],
})
export class SummariesModule {}
