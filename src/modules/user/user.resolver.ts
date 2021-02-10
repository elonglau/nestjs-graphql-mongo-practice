import { Injectable, UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../../common/decorators/user.decorator';
import { GqlAuthGuard } from '../../common/guards/gql-auth.guard';
import { UserService } from './user.service';
import { User } from '../../graphql';

@Injectable()
@Resolver('User')
@UseGuards(GqlAuthGuard)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query()
    async me(@CurrentUser() currentUser: User): Promise<User> {
        return currentUser;
    }

    @Query()
    async users(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Query()
    async user(id: string): Promise<User> {
        return await this.userService.findById(id);
    }
}
