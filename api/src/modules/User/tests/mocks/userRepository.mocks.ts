import { IUserRepository } from "../../../../helpers/interfaces/user.interfaces";
import { CreateUser, LoginUser } from "../../dto";
import { User } from "../../entity";

//creer une base de donnée fake
const users: any[] = [];

class UserRepositoryMocks implements IUserRepository {
  findById(user: User): Promise<User | undefined> {
    throw new Error("Method not implemented.");
  }
  delete(user: User): Promise<any> {
    throw new Error("Method not implemented.");
  }
  update(user: User): Promise<any> {
    throw new Error("Method not implemented.");
  }
  findOne(user: LoginUser): Promise<User | undefined> {
    throw new Error("Method not implemented.");
  }
  compareHash(password: string, hash: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async findAll() {
    return users;
  }

  async addNew(userEntity: CreateUser): Promise<CreateUser> {
    let userCreated = new User();
    userCreated.email = userEntity.email;
    userCreated.password = userEntity.password;

    users.push(userCreated);
    return users[users.length - 1];
  }
  async findByEmail(user: any) {
    return users[0];
  }
}
export default UserRepositoryMocks;
