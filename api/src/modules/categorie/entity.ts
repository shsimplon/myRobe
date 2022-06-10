import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Dress } from "../Dress/entity";

@Entity()
export class Categorie extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    unique: true,
  })
  name_categorie!: string;

  @OneToMany(() => Dress, (dress) => dress.categorie)
  dresses: Dress[];
}
