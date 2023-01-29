import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestingEntity } from 'src/typeorm/entities/testing.entity';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([TestingEntity])],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
