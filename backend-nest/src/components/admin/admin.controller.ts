import { Controller, Logger } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller()
export class AdminController {
  private readonly logger = new Logger(AdminController.name);
  constructor(private readonly adminService: AdminService) {}
}
