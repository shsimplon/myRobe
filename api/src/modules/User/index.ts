import { getCustomRepository } from "typeorm";
import { jwtService, mailerService } from "../../libs";
import UserController from "./controllert";
import UserRepository from "./repository";
import UserService from "./service";

const userRepository = getCustomRepository(UserRepository); //utilisation des methodes de typeorm

const userService = new UserService(userRepository, mailerService);
const userController = new UserController(userService, jwtService);
export { userController };
