import { Column } from "typeorm";

export class BaseEntity {
    @Column("date", { nullable: true})
    createdAt: Date;

    @Column("date", { nullable: true})
    updatedAt: Date;

    @Column("date", { nullable: true})
    deletedAt: Date;

}