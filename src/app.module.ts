import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlService } from './config/graphql/graphql.service';
import { TypeormService } from './config/typeorm/typeorm.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

@Module({
    imports: [
        GraphQLModule.forRootAsync({
            useClass: GraphqlService,
        }),
        TypeOrmModule.forRootAsync({
            useClass: TypeormService,
        }),
        AuthModule,
        UserModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
