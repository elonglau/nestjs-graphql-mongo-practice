import { Module } from '@nestjs/common';
import { GraphqlService } from './graphql.service';

@Module({
    imports: [],
    providers: [GraphqlService],
})
export class GraphqlModule {}
