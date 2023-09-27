import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }
  create(createUser: User): Promise<User>{
    const user: User = new User()
    user.id = createUser.id
    user.name = createUser.name
    user.age = createUser.age
    return this.userRepository.save(user)

  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUser: User) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
