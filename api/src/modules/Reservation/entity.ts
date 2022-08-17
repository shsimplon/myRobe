import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Dress } from "../Dress/entity";
import { User } from "../User/entity";

@Entity()
export class Reservation extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  date_departure!: string;
  @Column()
  return_date: string;
  @Column()
  quantity?: number;
  @Column()
  userId?: string;
  @Column()
  dressId?: string;

  //relation
  @ManyToOne(() => User, (user) => user.reservations)
  user: User;
  @ManyToOne(() => Dress, (dress) => dress.reservations)
  dress: Dress;
}
