import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { Dress } from "../Dress/entity";
import { Reservation } from "../Reservation/entity";

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
  @Column()
  role?: string;

  //relation
  @OneToMany(() => Reservation, (reservation) => reservation.user)
  reservations: Reservation[];
}
