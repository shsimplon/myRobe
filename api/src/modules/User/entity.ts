import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  name!: string;
  @Column({
    nullable: true,
  })
  address?: string;
  @Column({ nullable: true })
  phone?: string;
  @Column({
    unique: true,
  })
  email!: string;
  @Column()
  password!: string;
}
