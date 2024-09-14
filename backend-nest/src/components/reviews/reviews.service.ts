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
      const response = await axios.post(url, {
        input: createReviewDto.review,
      });

      const output = response.data.data.data;

      const convertArrayToObject = (array) => {
        return array.reduce((acc, item) => {
          const [key, value] = Object.entries(item)[0]; // Extract key-value pair from the single object
          acc[key] = value; // Add it to the accumulator object
          return acc;
        }, {});
      };

      const responseData = convertArrayToObject(output);

      console.log(responseData);

      const reviews = await this.reviewsRepository.create({
        review: createReviewDto.review,
        llmAnswer: responseData,
      });

      return reviews;
    } catch (err) {
      this.logger.log({ err }, 'Error while creating review');
    }
  }
}
