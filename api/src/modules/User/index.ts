import { getCustomRepository } from "typeorm";
import { jwtService } from "../../libs";
// import { jwtService, mailerService } from "../../libs";
import UserController from "./controllert";
import UserRepository from "./repository";
import UserService from "./service";

const userRepository = getCustomRepository(UserRepository); //utilisation des methodes de typeorm

const userService = new UserService(userRepository);
const userController = new UserController(userService, jwtService);
export { userController };
