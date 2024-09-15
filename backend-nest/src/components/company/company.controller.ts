import { Body, Controller, Post, Logger, Get, Param, UseGuards } from '@nestjs/common';
import { CompanyService } from './company.service';
import { JwtAuthGuard } from '../../common/authentication/jwt-auth.guard';

@Controller('company')
export class CompanyController {
  private readonly logger = new Logger(CompanyController.name);
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  async create(@Body() createCompanyDto) {
    this.logger.log('request reecived creating company');
    return await this.companyService.create(createCompanyDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async get() {
    this.logger.log('request received for getting companies');
    return await this.companyService.getAllCompanyDetails();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getCompanyId(@Param('id') id: string) {
    this.logger.log('request received for getting company by id');
    return await this.companyService.getCompanyById(id);
  }
}
