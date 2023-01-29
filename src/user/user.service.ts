import { Injectable } from '@nestjs/common';
import { TestingEntity } from 'src/typeorm/entities/testing.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(TestingEntity)
    private readonly testRepository: Repository<TestingEntity>,
  ) {}

  async getUserByName(username: string): Promise<any> {
    console.log('userService : ' + username);
    const users = await this.testRepository.findOne({
      where: [
        {
          username: username,
        },
      ],
    });

    console.log('userService : ' + users?.password);
    return users;
  }
}
