import { Module } from '@nestjs/common';
import { TypeormService } from './typeorm.service';

@Module({
    imports: [],
    providers: [TypeormService],
})
export class TypeormModule {}
