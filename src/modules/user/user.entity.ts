import { IsBoolean, IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn } from 'typeorm';

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @Length(8, 20)
    password: string;

    @IsString()
    @Length(6, 20)
    name: string;
}

export class UpdateUserDto {
    @IsString()
    @Length(6, 20)
    name: string;

    @IsBoolean()
    isActive: boolean;

    @IsBoolean()
    isBlocked: boolean;

    @IsBoolean()
    isOnline: boolean;
}

export class UpdatePasswordDto {
    @IsString()
    @IsNotEmpty()
    oldPassword: string;

    @IsString()
    @IsNotEmpty()
    @Length(8, 20)
    newPassword: string;
}

@Entity()
export class User {
    @ObjectIdColumn()
    _id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    @Column({ default: true })
    isActive: boolean;

    @Column()
    isBlocked: boolean;

    @Column()
    isOnline: boolean;
}
