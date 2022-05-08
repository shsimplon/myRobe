import { EntityManager, EntityRepository } from "typeorm";
import bcrypt from "bcrypt";
import { CreateUser, LoginUser } from "./dto";
import { User } from "./entity";
import { user } from "../../helpers/types/user.types";
import { IUserRepository } from "../../helpers/interfaces/user.interfaces";

@EntityRepository()
class UserRepository implements IUserRepository {
  constructor(private manager: EntityManager) {}

  async addNew(user: CreateUser) {
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);

    return await this.manager.save(User, user);
  }
  async findAll() {
    return await this.manager.find(User);
  }
  async findByEmail(user: LoginUser) {
    return await this.manager.findOne(User, { email: user.email });
  }
  async findOne(user: LoginUser) {
    return await this.manager.findOne(User, { email: user.email });
  }
  compareHash = async (password: string, hash: string) =>
    await bcrypt.compareSync(password, hash);
}

export default UserRepository;
