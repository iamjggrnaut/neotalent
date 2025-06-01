import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SummariesModule } from './summaries/summaries.module';
import { User } from './users/entities/user.entity';
import { Summary } from './summaries/entities/summary.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST ||'localhost',
      port: 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD ||'React2022',
      database: process.env.DB_NAME ||'pdf_summarizer',
      entities: [User, Summary],
      synchronize: true, 
    }),
    SummariesModule,
    AuthModule
  ],
})
export class AppModule {}