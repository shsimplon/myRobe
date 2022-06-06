import {
  IReservationRepoqitory,
  IReservationService,
} from "../../helpers/interfaces/reservation.interface";
import { ReservationDTO } from "./dto";
import { Reservation } from "./entity";

export default class ReservationService implements IReservationService {
  private reservationRepository;
  constructor(reservationRepository: IReservationRepoqitory) {
    this.reservationRepository = reservationRepository;
  }

  async getOne(reservation: Reservation) {
    const reservationData = await this.reservationRepository.getOne(
      reservation
    );
    if (!reservationData) {
      throw new Error("reservation introvable");
    }
    return reservationData;
  }
  async register(reservation: Reservation) {
    const reservationSaved = await this.reservationRepository.register(
      reservation
    );
    return reservationSaved;
  }
  async getAll() {
    const reservations = await this.reservationRepository.getAll();
    return reservations;
  }

  async update(reservation: Reservation) {
    const reservationData = await this.getOne(reservation);
    if (!reservationData) {
      throw new Error("reservation introuvable.");
    }
    if (reservation === reservationData) {
      throw new Error("reservation identique ou déjà modifiée.");
    }
    await this.reservationRepository.update(reservation);
    const reservationUpdated = await this.getOne(reservation);
    return reservationUpdated;
  }

  async delete(reservationId: Reservation) {
    const ReservationDeleted = await this.getOne(reservationId);
    if (!ReservationDeleted) {
      throw new Error("reservation introuvable.");
    }
    await this.reservationRepository.delete(reservationId);

    return `Reservation n°${reservationId.id} supprimée.`;
  }
}
