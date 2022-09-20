import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  ManyToMany,
  JoinTable,
  OneToMany,
} from "typeorm";
import { Reservation } from "../Reservation/entity";
import { Categorie } from "../categorie/entity";
import { User } from "../User/entity";

@Entity()
export class Dress extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name!: string;
  @Column("longtext")
  description!: string;
  @Column()
  size!: string;
  @Column()
  price!: string;
  @Column("longtext", { nullable: true })
  image?: string;

  @ManyToOne(() => Categorie, (categorie) => categorie.dresses)
  categorie: Categorie;
  @ManyToMany(() => User, (user) => user.dress)
  user: User[];

  @OneToMany((type) => Reservation, (reservation) => reservation.dress)
  reservations: Reservation[];
}
