
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class SigninInput {
    email: string;
    password: string;
    name?: string;
}

export class LoginInput {
    email: string;
    password: string;
}

export abstract class IMutation {
    abstract signin(input?: SigninInput): boolean | Promise<boolean>;

    abstract login(input?: LoginInput): string | Promise<string>;
}

export class User {
    _id?: string;
    name?: string;
    email?: string;
    createAt?: Date;
    updateAt?: Date;
    isActive?: boolean;
    isBlocked?: boolean;
    isOnline?: boolean;
}

export abstract class IQuery {
    abstract me(): User | Promise<User>;

    abstract users(): User[] | Promise<User[]>;

    abstract user(id: string): User | Promise<User>;
}
