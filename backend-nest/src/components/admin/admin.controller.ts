import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Logger,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { AdminService } from './admin.service';

@Controller()
export class AdminController {
  private readonly logger = new Logger(AdminController.name);
  constructor(private readonly adminService: AdminService) {}
}
