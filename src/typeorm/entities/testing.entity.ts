import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TestingEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({
  })
  username: string;

  @Column({
    length: 80,
  })
  password: string;
}
