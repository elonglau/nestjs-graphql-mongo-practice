import { Injectable } from '@nestjs/common';
import { Mutation } from '@nestjs/graphql';
import { LoginInput } from '../../graphql';
import { CreateUserDto } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

@Injectable()
export class AuthResolver {
    constructor(private readonly authService: AuthService, private readonly userService: UserService) {}
    @Mutation()
    async signin(input: CreateUserDto): Promise<boolean> {
        return await this.userService.create(input);
    }

    @Mutation()
    async login(input: LoginInput): Promise<string> {
        const { email, password } = input;
        return await this.authService.validateAccount(email, password);
    }
}
