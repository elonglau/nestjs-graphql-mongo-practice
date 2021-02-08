/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class User {
    _id?: string;
    name?: string;
    email?: string;
    passward?: string;
    createAt?: Date;
    updateAt?: Date;
    isActive?: boolean;
    isBlocked?: boolean;
    isOnline?: boolean;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;
}
