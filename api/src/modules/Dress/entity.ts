import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Model } from "../model/entity";
import { Reservation } from "../Reservation/entity";

@Entity()
export class Dress extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name!: string;
  @Column()
  description!: string;
  @Column()
  size!: string;
  @Column()
  price!: string;
  @Column("longtext")
  image?: string;

  @ManyToOne(() => Model, (model) => model.dresses)
  model: Model;
  @ManyToMany(() => Reservation, (reservation) => reservation.dress)
  @JoinTable({ name: "dress_reservation" })
  reservation: Reservation[];
}
