import { Controller, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SummariesService } from './summaries.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { GetUser } from '../auth/get-user.decorator';
import { User } from 'src/users/entities/user.entity';

@Controller('summaries')
export class SummariesController {
  constructor(private readonly summariesService: SummariesService) {}

  @Post('upload')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('pdf'))
  async uploadPdf(
    @UploadedFile() file: Express.Multer.File,
    @GetUser() user: User,
  ) {
    return this.summariesService.summarizePdf(file.buffer, user);
  }
}