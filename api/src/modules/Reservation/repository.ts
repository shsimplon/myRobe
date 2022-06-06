import {
  DeleteResult,
  EntityManager,
  EntityRepository,
  UpdateResult,
} from "typeorm";
import { IReservationRepoqitory } from "../../helpers/interfaces/reservation.interface";
import { Reservation } from "./entity";
import { ReservationDTO } from "./dto";

@EntityRepository()
class ReservationRepository implements IReservationRepoqitory {
  constructor(private manager: EntityManager) {}
  async delete(reservationId: Reservation) {
    return await this.manager.delete(Reservation, reservationId.id);
  }
  async update(reservation: Reservation): Promise<UpdateResult> {
    return await this.manager.update(Reservation, reservation.id, {
      ...reservation,
    });
  }
  async getOne(reservation: Reservation): Promise<Reservation | undefined> {
    return await this.manager.findOne(Reservation, reservation.id);
  }
  async register(reservation: Reservation): Promise<Reservation> {
    return await this.manager.save(Reservation, reservation);
  }
  async getAll(): Promise<Reservation[]> {
    return await this.manager.find(Reservation);
  }
}
export default ReservationRepository;
