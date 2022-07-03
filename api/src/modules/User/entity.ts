import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToMany,
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
  @Column({ nullable: true })
  role?: string;

  //relation
  //   @OneToMany(() => Reservation, (reservation) => reservation.user)
  //   reservations: Reservation[];
  @ManyToMany(() => Dress, (dress) => dress.user)
  dress: Dress[];
  @OneToMany(() => Reservation, (reservation) => reservation.user)
  reservation: Reservation[];
}

export type user = {
  email: string;
  password: string;
  name: string;
  address: string;
  phone: string;
  role: string;
};
