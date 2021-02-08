import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlService } from './config/graphql/graphql.service';
import { UserModule } from './modules/user/user.module';

@Module({
    imports: [
        GraphQLModule.forRootAsync({
            useClass: GraphqlService,
        }),
        UserModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
