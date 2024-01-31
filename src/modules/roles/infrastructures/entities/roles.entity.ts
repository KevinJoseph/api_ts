import { UserEntity } from "../../../users/infrastructure/entities/user.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "role"})
export class RoleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {length: 100})
    name: string;

    @ManyToMany(() => UserEntity, (user) => user.roles)
    users: UserEntity[];
}