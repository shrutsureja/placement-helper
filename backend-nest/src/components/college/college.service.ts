import { Injectable } from '@nestjs/common';

@Injectable()
export class CollegeService {
  create(createCollegeDto) {
    return 'This action adds a new college';
  }

  findAll() {
    return `This action returns all college`;
  }

  findOne(id: number) {
    return `This action returns a #${id} college`;
  }

  update(id: number, updateCollegeDto) {
    return `This action updates a #${id} college`;
  }

  remove(id: number) {
    return `This action removes a #${id} college`;
  }
}
