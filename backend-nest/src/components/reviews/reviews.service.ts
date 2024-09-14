import { Inject, Injectable, Logger } from '@nestjs/common';
import { ReviewRepository } from './reviews.repository';
import axios from 'axios';
import serverConfig from 'src/config/config-list/server.config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class ReviewsService {
  private readonly logger = new Logger(ReviewsService.name);
  constructor(
    @Inject(serverConfig.KEY)
    private readonly serverConfigurations: ConfigType<typeof serverConfig>,
    private readonly reviewsRepository: ReviewRepository,
  ) {}
  async create(createReviewDto) {
    try {
      const url = `${this.serverConfigurations.llmBaseURL}/llm/format`;
      console.time('LLM');
      const response = await axios.post(url, {
        input: createReviewDto,
      });
      console.timeEnd('LLM');

      const output = response.data;

      const reviews = await this.reviewsRepository.create({
        review: createReviewDto,
        llmAnswer: output,
      });

      return reviews;
    } catch (err) {
      this.logger.log({ err }, 'Error while creating review');
    }
  }

  async getAnswer(question) {
    const url = `${this.serverConfigurations.llmBaseURL}/llm`;
    console.time('LLM');
    const response = await axios.post(url, {
      input: question.input,
    });
    console.timeEnd('LLM');

    const output = response.data;
    return output;
  }
}
