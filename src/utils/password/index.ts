import { hash, compare } from 'bcrypt';
import { BCRYPT_SALT } from '../../constant';

// Returns hashed password by hash password.
export const hashPassword = async (password: string): Promise<string> => {
    return await hash(password, BCRYPT_SALT);
};

// Returns boolean by compare password.
export const comparePassword = async (password: string, hashstr: string): Promise<boolean> => {
    return await compare(password, hashstr);
};
