import { getCustomRepository } from "typeorm";
import UserController from "./controllert";
import UserRepository from "./repository";
import UserService from "./service";

//utilisation des methodes de typeorm
// const userRepository = getCustomRepository(UserRepository);
// const userService = new UserService();
const userController = new UserController();

export { userController };
