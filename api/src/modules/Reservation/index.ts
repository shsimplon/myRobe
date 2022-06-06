import { getCustomRepository } from "typeorm";
import ReservationController from "./controllert";
import ReservationRepository from "./repository";
import ReservationService from "./service";

const reservationRepository = getCustomRepository(ReservationRepository); //utilisation des methodes de typeorm

const reservationService = new ReservationService(reservationRepository);
const reservationController = new ReservationController(reservationService);
export { reservationController };
