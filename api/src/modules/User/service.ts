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
  //   async getById(user: User): Promise<User> {
  //     const userData = await this.UserRepository.findOne(user);
  //     console.log("userData", userData?.id);
  //     //@ts-ignore
  //     return userData;
  //   }

  async getById(user: User) {
    const userById = await this.UserRepository.findById(user);

    return user;
  }

  async getAll() {
    const users = await this.UserRepository.findAll();
    return users;
  }

  async register(user: CreateUser): Promise<CreateUser> {
    if (!user.email || !user.password || !user.username)
      throw new ApiError(
        400,
        "Les champs email et mot de passe sont obligatoires"
      );

    const userLogin = await this.UserRepository.findByEmail(user as any);
    if (userLogin?.email) throw new ApiError(400, "Ce compte existe déja");

    const users = await this.UserRepository.addNew(user);

    return users;
  }

  async login(user: LoginUser) {
    if (!user.email || !user.password)
      throw new ApiError(
        400,
        "Les champs email et mot de passe sont obligatoires"
      );

    const userLogin = await this.UserRepository.findByEmail(user);

    if (!userLogin) throw new ApiError(400, "L'utilisateur n'existe pas");

    const passwordMatch = await this.UserRepository.compareHash(
      user.password,
      userLogin.password
    );
    if (!passwordMatch)
      throw new ApiError(400, "Email ou le mot de passe ne correspondent pas");

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
