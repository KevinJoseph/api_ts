import { Result } from 'neverthrow';
import { UserEntity } from '../infrastructure/entities/user.entity';
import {User} from './user';
import { UserInsertException } from '../infrastructure/exceptions/user.exception';

export interface UserRepository {
    insert(user: User): Promise<Result<UserEntity, UserInsertException>>
    getAll(): User[];
}
