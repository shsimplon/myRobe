import { Controller, Delete, Get, Post, Put } from "@overnightjs/core";
import { NextFunction, Request, Response } from "express";
import { get } from "http";
import { IDressService } from "../../helpers/interfaces/dress.interfaces";
import { DressDTO } from "./dto";
import { Dress } from "./entity";
@Controller("dress")
class DressController {
  private dressService;
  constructor(dressService: IDressService) {
    this.dressService = dressService;
  }
  @Get()
  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let dresses = await this.dressService.getAll();
      const result = dresses.map((dress) => new DressDTO(dress));
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
  @Post()
  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dresscreted = await this.dressService.register({ ...req.body });
      res.status(201).json(new DressDTO(dresscreted));
    } catch (err) {
      next(err);
    }
  };
  @Get(":id")
  getOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dress = await this.dressService.getOne({ ...req.body });

      res.status(201).json(new DressDTO(dress));
    } catch (err) {
      next(err);
    }
  };
  @Put()
  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dress = await this.dressService.update({ ...req.body });
      res.status(201).json(dress);
    } catch (err) {
      next(err);
    }
  };
  @Delete(":id")
  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dress = await this.dressService.delete({ ...req.body });

      res.status(201).json(dress);
    } catch (err) {
      next(err);
    }
  };
}

export default DressController;
