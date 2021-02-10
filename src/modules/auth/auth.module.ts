import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { GqlAuthGuard } from '../../common/guards/gql-auth.guard';
import { SECRET_KEY } from '../../constant';
import { UserModule } from '../user/user.module';
import { AuthResolver } from './auth.resolve';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [
        UserModule,
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({ secret: SECRET_KEY }),
    ],
    providers: [AuthResolver, AuthService, JwtStrategy, GqlAuthGuard],
    exports: [AuthService, GqlAuthGuard],
})
export class AuthModule {}
