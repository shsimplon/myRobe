import { ApiError } from "../../helpers/ApiError";
import {
  IUserRepository,
  IUserService,
} from "../../helpers/interfaces/user.interfaces";
import { IMailerService } from "../../libs/mailer";
import { CreateUser, DeleteUser, LoginUser, UpdateUser, UserDTO } from "./dto";
import { User } from "./entity";
import UserRepository from "./repository";

export default class UserService implements IUserService {
  private UserRepository;
  constructor(userRepository: IUserRepository) {
    this.UserRepository = userRepository;
  }

  async getOne(user: LoginUser): Promise<User | undefined> {
    const userData = await this.UserRepository.findOne(user);
    return userData;
  }
  getById(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }

  async getAll() {
    const users = await this.UserRepository.findAll();
    return users;
  }

  async register(user: CreateUser): Promise<CreateUser> {
    if (!user.email || !user.password)
      throw new ApiError(400, "Missing required email and password fields");
    const users = await this.UserRepository.addNew(user);
    console.log("user", user);

    // await this.mailerService.sendMail(user);
    return users;
  }
  async login(user: LoginUser) {
    if (!user.email || !user.password)
      throw new ApiError(400, "Missing required email and password fields");

    const userLogin = await this.UserRepository.findByEmail(user);

    if (!userLogin)
      throw new ApiError(400, "User with the specified email does not exists");

    const passwordMatch = await this.UserRepository.compareHash(
      user.password,
      userLogin.password
    );
    if (!passwordMatch)
      throw new ApiError(400, "Email or password do not match");

    return userLogin;
  }

  async update(user: User) {
    const userdata = await this.getOne(user);
    await this.UserRepository.update(user);
    const userUpdated = await this.UserRepository.findOne(user);
    console.log(userUpdated);
    return userUpdated;
  }

  async delete(user: User) {
    const userData = await this.getOne(user);
    await this.UserRepository.delete(user);
    return `User n°${user.id} supprimée.`;
  }
}
