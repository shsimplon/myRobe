import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Reservation } from "../Reservation/entity";
import { Categorie } from "../categorie/entity";

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
  @Column("longtext", { nullable: true })
  image?: string;

  @ManyToOne(() => Categorie, (categorie) => categorie.dresses)
  categorie: Categorie;
  @ManyToMany(() => Reservation, (reservation) => reservation.dress)
  @JoinTable({ name: "dress_reservation" })
  reservation: Reservation[];
}
