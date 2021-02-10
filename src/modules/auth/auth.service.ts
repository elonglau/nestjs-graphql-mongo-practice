import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { User } from '../../graphql';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService, private readonly userService: UserService) {}

    async validateUser(id: string): Promise<User> {
        const user = await this.userService.findById(id);
        const { password, ...rest } = user;
        return rest;
    }

    async validateAccount(email: string, password: string): Promise<string> {
        const user = await this.userService.findByEmail(email);
        if (user && (await compare(password, user.password))) {
            return this.jwtService.sign({ userId: user._id }, { expiresIn: '7 day' });
        } else {
            throw new HttpException('Signin failed!', HttpStatus.FORBIDDEN);
        }
    }

    async findByToken(token: string): Promise<User> {
        try {
            const id = this.jwtService.decode(token)['userId'];
            const currentUser = await this.userService.findById(id);
            const { password, ...rest } = currentUser;
            return rest;
        } catch (error) {
            console.log(error);
            throw new HttpException('The token you provided was invalid', HttpStatus.FORBIDDEN);
        }
    }
}
