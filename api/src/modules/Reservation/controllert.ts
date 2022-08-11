import {
  Controller,
  Delete,
  Get,
  Middleware,
  Post,
  Put,
} from "@overnightjs/core";
import { NextFunction, Request, Response } from "express";
import { IReservationService } from "../../helpers/interfaces/reservation.interface";
import middlewares, { auth } from "../../middlewares";
import AuthMiddleware from "../../middlewares/auth";
import { ReservationDTO } from "./dto";
import { Reservation } from "./entity";

@Controller("reservation")
class ReservationController {
  reservationService: IReservationService;
  constructor(reservationService: IReservationService) {
    this.reservationService = reservationService;
  }
  @Get()
  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reservations = await this.reservationService.getAll();
      const result = reservations.map(
        (reservation: Reservation) => new ReservationDTO(reservation)
      );
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
  @Post()
  @Middleware(auth.isAuth)
  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reservation = await this.reservationService.register({
        ...req.body,
      });
      console.log("reservation", reservation);

      res.status(201).json(new ReservationDTO(reservation));
    } catch (err) {
      next(err);
    }
  };
  @Get(":id")
  getOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reservation = await this.reservationService.getOne({ ...req.body });

      res.status(201).json(reservation);
    } catch (err) {
      next(err);
    }
  };
  @Put()
  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reservation = await this.reservationService.update({ ...req.body });
      res.status(201).json(reservation);
    } catch (err) {
      next(err);
    }
  };
  @Delete(":id")
  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reservation = await this.reservationService.delete({ ...req.body });

      res.status(201).json(reservation);
    } catch (err) {
      next(err);
    }
  };
}

export default ReservationController;
