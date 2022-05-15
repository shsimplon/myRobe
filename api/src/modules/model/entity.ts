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
export class Model extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    unique: true,
  })
  name_model!: string;

  @OneToMany(() => Dress, (dress) => dress.model)
  dresses: Dress[];
}
