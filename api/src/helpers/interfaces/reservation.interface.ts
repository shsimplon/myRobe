import { Reservation } from "../../modules/Reservation/entity";
import { ReservationDTO } from "../../modules/Reservation/dto";
import { DeleteResult, UpdateResult } from "typeorm";

export interface IReservationService {
  delete(reservationId: Reservation): Promise<string>;
  update(reservation: Reservation): Promise<Reservation | undefined>;
  getOne(reservation: Reservation): Promise<Reservation | undefined>;
  register(reservation: Reservation): Promise<ReservationDTO>;
  getAll(): Promise<Reservation[]>;
}
export interface IReservationRepoqitory {
  delete(reservationId: Reservation): Promise<DeleteResult>;
  update(reservation: Reservation): Promise<UpdateResult>;
  getOne(reservation: Reservation): Promise<Reservation | undefined>;
  register(reservation: Reservation): Promise<Reservation>;
  getAll(): Promise<Reservation[]>;
}
