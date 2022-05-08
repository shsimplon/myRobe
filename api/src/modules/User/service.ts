import { ApiError } from "../../helpers/ApiError";
import {
  IUserRepository,
  IUserService,
} from "../../helpers/interfaces/user.interfaces";
import { IMailerService } from "../../libs/mailer";
import { CreateUser, LoginUser } from "./dto";
import { User } from "./entity";
import UserRepository from "./repository";

export default class UserService implements IUserService {
  private UserRepository;
  private mailerService;
  constructor(userRepository: IUserRepository, mailerService: IMailerService) {
    this.UserRepository = userRepository;
    this.mailerService = mailerService;
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
    await this.mailerService.sendMail(user);
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
}
