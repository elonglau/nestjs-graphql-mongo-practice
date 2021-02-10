import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hashPassword } from 'src/utils';
import { MongoRepository } from 'typeorm';
import { CreateUserDto, User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: MongoRepository<User>
    ) {}

    async findAll(): Promise<User[]> {
        return;
    }

    async findById(_id: string): Promise<User> {
        return await this.userRepository.findOne({ _id });
    }

    async findByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne({ email });
    }

    async create(input: CreateUserDto): Promise<boolean> {
        const { email, password, name } = input;
        const existUser = await this.userRepository.findOne({ email });

        if (existUser) {
            console.log('Email already exists.', email);
            throw new HttpException('This email has been registered!', HttpStatus.FORBIDDEN);
        }

        const user = new User();
        user.email = email;
        user.password = await hashPassword(password);
        user.name = name;
        return (await this.userRepository.save(user)) ? true : false;
    }
}
