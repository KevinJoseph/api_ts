import { RoleEntity } from "../../../roles/infrastructures/entities/roles.entity"
import { BaseEntity } from "../../../../core/infrastructure/base-entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "user"})
export class UserEntity extends BaseEntity {
    @PrimaryColumn()
    id: string;

    @Column("varchar", { length: 100})
    name: string;

    @Column("varchar", { length: 100})
    lastname: string;

    @Column("varchar", { length: 100})
    email: string;

    @Column("varchar", { length: 150})
    password: string;

    @Column("boolean", { default: true})
    active: boolean;

    @ManyToMany(()=> RoleEntity, (role) => role.users)
    @JoinTable()
    roles: RoleEntity[]
}