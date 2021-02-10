import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { getMetadataArgsStorage } from 'typeorm';

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {
    async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
        return {
            type: 'mongodb',
            url: 'mongodb://127.0.0.1:27017/testdb',
            entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
            synchronize: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
    }
}
