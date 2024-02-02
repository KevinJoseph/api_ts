import { Result } from 'neverthrow';
import { UserEntity } from '../infrastructure/entities/user.entity';
import {User} from './user';
import { UserInsertException } from '../infrastructure/exceptions/user.exception';
import { UserInsertResult } from '../infrastructure/user.infrastructure';

export interface UserRepository {
    insert(user: User): Promise<UserInsertResult> 
    getAll(): User[];
}
