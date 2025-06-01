import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as pdfParse from 'pdf-parse';
import OpenAI from 'openai';
import { Summary } from './entities/summary.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class SummariesService {
  private openai: OpenAI;

  constructor(
    @InjectRepository(Summary)
    private summariesRepository: Repository<Summary>,
  ) {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY as string,
    });
  }

  async summarizePdf(pdfBuffer: Buffer, user: User): Promise<Summary> {
    try {
      const pdfText = await pdfParse(pdfBuffer);

      const prompt = `Summarize this in 3 sentences: ${pdfText.text}`;
      const response = await this.openai.completions.create({
        model: 'text-davinci-003',
        prompt,
        max_tokens: 150,
      });

      const summaryText = response.choices[0].text.trim();
      const summary = this.summariesRepository.create({
        content: summaryText,
        user,
      });

      return this.summariesRepository.save(summary);
    } catch (error) {
      throw new Error(`Failed to parse PDF: ${error.message}`);
    }
  }
}
