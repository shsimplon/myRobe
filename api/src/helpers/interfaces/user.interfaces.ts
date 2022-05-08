import { CreateUser, LoginUser } from "../../modules/User/dto";
import { User } from "../../modules/User/entity";

export interface IUserService {
  getAll(): Promise<User[]>;
  getOne(user: LoginUser): Promise<User | undefined>;
  getById(user: User): Promise<User>;
  login(user: LoginUser): Promise<User>;
  register(user: CreateUser): Promise<CreateUser>;
}
export interface IUserRepository {
  findOne(user: LoginUser): Promise<User | undefined>;
  findAll(): Promise<User[]>;
  findByEmail(user: LoginUser): Promise<User | undefined>;
  compareHash(password: string, hash: string): Promise<boolean>;
  addNew(user: CreateUser): Promise<CreateUser>;
}
