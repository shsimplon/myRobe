import { getCustomRepository } from "typeorm";
import UserRepository from "../User/repository";
import DressController from "./controllert";
import DressRepository from "./repository";
import DressService from "./service";

const dressRepository = getCustomRepository(DressRepository); //utilisation des methodes de typeorm

const dressService = new DressService(dressRepository);
const dressController = new DressController(dressService);
export { dressController };
