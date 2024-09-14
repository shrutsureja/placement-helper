import { Injectable } from '@nestjs/common';

@Injectable()
export class SuperAdminService {
  create(createSuperAdminDto) {
    return 'This action adds a new superAdmin';
  }

  findAll() {
    return `This action returns all superAdmin`;
  }
}
