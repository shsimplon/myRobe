import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from "typeorm";
import { Dress } from "../Dress/entity";
import { User } from "../User/entity";

@Entity()
export class Reservation extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  name!: string;
  @Column()
  tel!: string;
  @Column()
  email!: string;
  @Column()
  date_departure!: string;
  @Column()
  reurn_date: string;

  //relation

  @ManyToMany(() => Dress, (dress) => dress.reservation)
  dress: Dress[];
  @ManyToOne(() => User, (user) => user.reservations)
  user: User;
}
